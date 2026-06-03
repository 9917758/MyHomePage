<template>
      <div>
        <div>
          <div :style="xs||sm?{'display':'none'}:{'font-size':'4rem'}" class="leleo-left-welcome">{{ configdata.welcometitle }}</div>
        </div>
        <div>
          <v-row align="center">
            <v-col cols="12" md="8">
				<v-text-field class="v-card"
					:style="xs||sm?{'display':'none'}:{}"
					v-model="searchQuery"
					placeholder="搜索..."
					variant="outlined"
					rounded
					hide-details="true"
					@keyup.enter="performSearch"
					>
					<template v-slot:prepend-inner>
						<v-menu>
							<template v-slot:activator="{ props }">
							<v-btn
								variant="text"
								v-bind="props"
								class="engine-btn"
							>
								{{ selectedEngine.title }}
								<v-icon icon="mdi-chevron-down"></v-icon>
							</v-btn>
							</template>
							<v-list class="glass-list">
								<v-list-item
									v-for="engine in searchEngines"
									:key="engine.value"
									@click="selectedEngine = engine"
									density="compact"
								>
									{{ engine.title }}
								</v-list-item>
							</v-list>
						</v-menu>
					</template>

					<template v-slot:append-inner>
						<v-btn
						:icon="isUrl ? 'mdi-earth' : 'mdi-magnify'"
						variant="text"
						@click="performSearch"
						></v-btn>
					</template>
					</v-text-field>
            	<typewriter class="ma-3 d-flex align-center justify-center" style="min-height: 200px;"></typewriter>
            </v-col>
            <v-col cols="12" md="4" align="center">
              <v-card class="ma-3" hover
                >
                  <template v-slot:title >
                    <span class="leleo-card-title clock-font">{{formattedTime}}</span>
                  </template>
                  <template v-slot:subtitle>
                    <span style="font-weight: bold;">{{formattedDate}}</span>
                  </template>
                  <turntable :color1="configdata.color.turntablecolor1" :color2="configdata.color.turntablecolor2" />
              </v-card>
            </v-col>
          </v-row>
          
          <v-chip class="mt-3 ml-3" prepend-icon="mdi-webhook"  size="large" style="color: var(--leleo-vcard-color);">
            部署项目
          </v-chip>
          <v-container>
            <v-row>
              <v-col
                v-for="(item,key) in projectcards"
                cols="6"
                md="4"
                lg="3"
                :style="xs?{'padding': '6px'}:{}"
              >
                <v-card class="">
                  <v-img
                    aspect-ratio="1.7778"
                    :src= item.img
                    cover
                    :style="{ opacity: 0.8 }"
                  ></v-img>
                  <v-card-title :style="xs?{'font-size': '0.9rem','padding': '0.15rem 0.5rem'}:{'font-size': '1.1rem','padding':'0.2rem 0.8rem'}">
                    {{item.title}}
                  </v-card-title>
                  <v-card-subtitle :style="xs?{'font-size': '0.6rem','padding': '0.1rem 0.5rem'}:{'font-size': '0.8rem','padding':'0.15rem 0.6rem'}">
                    {{ item.subtitle }}
                  </v-card-subtitle>

                  <v-card-actions :style="xs||sm||md?{'padding': '0','min-height': '0','height':'2.5rem'}:{'min-height': '0','height':'2.8rem'}">
                    <v-btn 
                      @click="openProjectDialog(item)"
                      :text= "item.go"
                    ></v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                      @click="item.show = !item.show;projectcardsShow(key);"
                    ></v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="item.show">
                      <v-divider></v-divider>
                      <v-card-text :style="xs?{'font-size': '0.7rem'}:{}">
                        {{item.text}}
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          
          <!-- 项目详情弹窗 -->
          <v-dialog v-model="projectDialog" :max-width="xs || sm ? '100%' : '1200px'">
            <v-card v-if="currentProject" style="background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px);">
              <v-toolbar color="transparent" density="compact">
                <v-toolbar-title class="text-h6" style="font-weight: bold; color: #333333;">
                  {{ currentProject.title }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-close" @click="projectDialog = false" color="#333333"></v-btn>
              </v-toolbar>
              <v-card-text style="padding: 16px; max-height: 80vh; overflow-y: auto;">
                <div v-if="currentProject.detailType === 'image'" class="d-flex flex-column align-center">
                  <v-img 
                    v-for="(imgSrc, idx) in currentProject.detailData" 
                    :key="idx"
                    :src="imgSrc"
                    class="mb-4"
                    style="width: 100%; border-radius: 8px;"
                  ></v-img>
                </div>
                <div v-else-if="currentProject.detailType === 'split'">
                  <v-row>
                    <v-col cols="12" md="8" class="d-flex flex-column align-center">
                      <v-img 
                        v-for="(imgSrc, idx) in currentProject.detailData.images" 
                        :key="idx"
                        :src="imgSrc"
                        class="mb-4"
                        style="width: 100%; border-radius: 8px;"
                      ></v-img>
                    </v-col>
                    <v-col cols="12" md="4" class="d-flex flex-column align-center pt-md-4">
                      <v-card variant="outlined" style="border-radius: 8px; width: 100%; background-color: rgba(255,255,255,0.5);">
                        <v-card-text class="text-center">
                          <v-icon icon="mdi-file-word" size="64" color="blue-darken-2" class="mb-2"></v-icon>
                          <div class="text-h6 mb-2" style="color: var(--leleo-vcard-color);">需求文档原件</div>
                          <div class="text-caption mb-4" style="color: var(--leleo-vcard-color);">{{ currentProject.detailData.document.name }}</div>
                          <v-btn 
                            color="primary" 
                            prepend-icon="mdi-download"
                            :href="currentProject.detailData.document.path"
                            target="_blank"
                            download
                          >
                            点击下载/查看
                          </v-btn>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
                <div v-else-if="currentProject.detailType === 'iframe'" style="width: 100%; height: 85vh;">
                  <iframe :src="currentProject.detailData[0]" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
                </div>
                <div v-else class="text-center py-4">
                  暂无详细内容
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>

        </div>       
      </div>
</template> 

<script>
import typewriter from '../components/typewriter.vue';
import turntable from '../components/turntable.vue';
import { useDisplay } from 'vuetify'

export default {
    components: {
        typewriter,turntable
    },
    props: ['configdata','formattedTime','formattedDate','projectcards'],
	data() {
		return {
			projectDialog: false,
			currentProject: null,
			searchQuery: '',
			selectedEngine: { title: 'Bing', value: 'bing' },
      		searchEngines :[
				{ title: 'Bing', value: 'bing' },
				{ title: 'Google', value: 'google' },
				{ title: '百度', value: 'baidu' },
				{ title: 'Yandex', value: 'yandex' },
				{ title: 'DuckDuckGo', value: 'duckduckgo' },
			]
		}
	},
    setup() {
      const { xs,sm,md } = useDisplay();
      return {xs,sm,md};
    },
	computed: {	
		isUrl(){
			const str = this.searchQuery.trim();
  			return this.isLikelyUrl(str);
		}
	},
    methods:{
      openProjectDialog(item) {
        if (item.detailType === 'link' && item.detailData && item.detailData.length > 0) {
          window.open(item.detailData[0], '_blank');
        } else {
          this.currentProject = item;
          this.projectDialog = true;
        }
      },
      projectcardsShow(key){
        for(let i = 0;i < this.projectcards.length;i++){
          if(i != key){
            this.projectcards[i].show = false;
          }
        }
      },
	  performSearch() {
		const query = this.searchQuery.trim();
		if (!query) return;

		if (this.isUrl) {
			let url = query;
			// 自动补全协议（如果缺少）
			if (!/^[a-z]+:\/\//i.test(url)) {
				url = 'http://' + url; // 默认用http
			}
			
			window.open(url, '_blank');
		} else {
			const engineUrls = {
				google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
				bing: `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
				baidu: `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`,
				yandex: `https://yandex.com/search/?text=${encodeURIComponent(query)}`,
				duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`
			};
			window.open(engineUrls[this.selectedEngine.value], '_blank');
		}
	  },
	  isLikelyUrl(input) {
		// 移除首尾空格
		const str = input.trim();
		
		// 情况1：明确包含协议头（http/https/ftp等）
		if (/^(https?|ftp):\/\//i.test(str)) return true;
		
		// 情况2：符合域名格式（支持国际化域名）
		const domainPattern = /^([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i;
		
		// 情况3：localhost或IP地址
		const localPattern = /^(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?(\/.*)?$/i;
		
		
		return (
			domainPattern.test(str) || 
			localPattern.test(str)
		);
		}
    }
};
</script>

<style scoped>
@import url(/css/app.less);
@import url(/css/mobile.less);
.glass-list {
	background: transparent !important;
	backdrop-filter: blur(var(--leleo-blur));
	border-radius: 5%;
	color: var(--leleo-vcard-color);
	overflow: hidden;
}
</style>