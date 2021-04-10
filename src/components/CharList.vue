<template>
    <div class="list">
        <div class="list__head">
            <span class="list__head-item">Name</span>
            <span class="list__head-item">Gender</span>
            <span class="list__head-item">Appearance</span>
            <span class="list__head-item">Action</span>
        </div>

        <template v-if="isLoading">
            <loader></loader>
        </template>

        <template v-else>
            <div class="list__items-wrapper">
                <card v-for="char in characters" :charData="char" :key="char.name" ></card>
            </div>
        </template>


        <!-- <span>females: {{ gender.female }}</span>
        <span>males: {{ gender.male }}</span>
        <span>other: {{ gender.other }}</span> -->

    </div>
</template>

<script>
import Card from './CharCard';
import Loader from './Loader';

export default {
    name:"List",
    data(){
        return {
            isLoading: false,
            isError: false,
            total: 0,
            gender: {
                male: 0,
                female: 0,
                other: 0
            },
            females: 0,
            characters: [],
        }
    },
    methods: {
        startLoading: function(){
          this.isLoading = true;
        },
        endLoading: function(){
          this.isLoading = false;
        },
        countCharacters: function() {
            const gender = {
                male: 0,
                female: 0,
                other: 0
            }
            
            this.characters.forEach((person)=>{
                if(person.gender === "male"){
                    gender.male++;
                }else if(person.gender === "female"){
                    gender.female++;
                }else{
                    gender.other++;
                }
            })
            this.gender = gender;
            // this.males = males;
            // this.females = females;
        },
        filterRecords: async function(data){
            const { count, results } = data,
                  totalPages = Math.ceil(count / 10);
            
            let restRecords = []

            //collect charcters form all pages
            for (let i = 2; i <= totalPages; i++) {
                const response = await this.getData(`https://swapi.dev/api/people/?page=${i}`);
                restRecords = [...restRecords, ...response.results];
            }
            const allRecords = [...results, ...restRecords];
            console.log(allRecords)
            //filter records 
            const filteredList = allRecords.filter((person) => {
                const firstLetter = person.name.trim().toLowerCase().charAt(0);
                if( (firstLetter != "c") && (firstLetter != "b") && (firstLetter != "a") ){
                    return person;
                }
            })

            filteredList.forEach((person, index) => {
                const id = allRecords.findIndex((item)=>{
                    // console.log(item.name === person.name)
                    return item.name === person.name;
                })
                
                filteredList[index] = {...filteredList[index], id: id+1};
            })



            this.characters = filteredList;
            
        },
        getData: async function(url){
            
            const response = await fetch(url)
              .then(response =>  response.json())
              .then(data => {
                return data
              })
              .catch(() => {
                return false
              });

            return response;
        }
    },
    async mounted() {
        this.startLoading();
        const response = await this.getData('https://swapi.dev/api/people');
        if(response){
             await this.filterRecords(response);
             this.countCharacters();
             this.endLoading();

        }else{
            this.endLoading();
            this.isError = true;
        }
    },
    components: {
        Card,
        Loader
    }
}
</script>

<style lang="scss">
@import '../assets/scss/components/_char-list.scss';
</style>
