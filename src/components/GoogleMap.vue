
<template>
    <div>
        <div style="max-width: 800px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between">
            <div>
                <h1>Your coordinates:</h1>
                <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
            </div>
            <div>
                <h1>Map coordinates:</h1>
                <p>{{ mapCoordinates.json }} Latitude, {{ mapCoordinates.json }} Longitude</p>
            </div>
        </div>
        
        <GmapMap
            :center="myCoordinates"
            :zoom="zoom"
            style="width:640px; height:360px; margin: 32px auto;"
            ref="mapRef"
            @dragend="handleDrag"
        ></GmapMap>
        <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </div>
</template>
<script>
    import json from '../vehicleCoordinates.json'
    import message from '../messages.json'


    export default {
        data() {
            return {
                map: null,
                myCoordinates: {
                    json,
                    message
                },
                zoom: 7,
                markers: [],
      places: [],
            }
        },
        created() {


            console.log(json)


            if(localStorage.center) {
                this.myCoordinates = JSON.parse(localStorage.center);
            } else {
                this.$getLocation({})
                    .then(coordinates => {
                        this.myCoordinates = coordinates;
                    })
                    .catch(error => alert(error));
            }
            if(localStorage.center) {
                this.myCoordinates = JSON.parse(localStorage.center);
            }
            if(localStorage.zom){
              this.zoom = parseInt.localStorage.zoom;
            }
        },
        mounted() {
            this.$refs.mapRef.$mapPromise.then(map => this.map = map);
        },
        methods: {
            handleDrag() {
                let center = {
                    lat: this.map.getCenter().lat(),
                    lng: this.map.getCenter().lng()
                };
                let zoom = this.map.getZoom();
                localStorage.center = JSON.stringify(center);
                localStorage.zoom = zoom;
            }
        },
        addMarker() {
      if (this.myCoordinates) {
        const marker = {
          lat: this.myCoordinates.geometry.location.lat(),
          lng: this.myCoordinates.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.myCoordinates);
        this.center = marker;
        this.myCoordinates = null;
      }
    },
        computed: {
            mapCoordinates() {
                if(!this.map) {
                    return {
                        lat: 0,
                        lng: 0
                    };
                }
                return {
                    lat: this.map.getCenter().lat().toFixed(4),
                    lng: this.map.getCenter().lng().toFixed(4)
                }
            }
        }
    }
</script>