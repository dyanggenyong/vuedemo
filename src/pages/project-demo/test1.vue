<style scoped>

</style>
<template>
    <div id="map" class="layout" style="width: 400px;height: 300px;">
        <v-map :zoom=13 :center="[47.413220, -1.219482]">
            <v-tilelayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'></v-tilelayer>
            <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker>
        </v-map>
    </div>
</template>
<script>
    import { Map,TileLayer,Marker} from 'vue2-leaflet';
    import * as DPQUtil from '@/util/axios';
    export default {
      data(){
          return{}
      },
        created() {
            this.$post("/article/GetRelatedArticles",{pageindex:2,articleId:53926112})
        },
        components:{
            "v-map":Map,
            "v-tilelayer":TileLayer,
            "v-marker":Marker
        }
    }
</script>