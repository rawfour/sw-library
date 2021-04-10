<template>

    <div class="list">
        <heading>Characters list</heading>


        <transition name="fade" mode="out-in" appear>


            <template v-if="isLoading">
                <loader></loader>
            </template>


            <template v-else>

                <div>

                    <div class="counters-wrapper">
                        <counter :targetValue="gender.female">Females</counter>
                        <counter :targetValue="gender.male">Males</counter>
                        <counter :targetValue="gender.other">Other</counter>
                    </div>

                    <div class="list__head">
                        <span class="list__head-item">Name</span>
                        <span class="list__head-item">Gender</span>
                        <span class="list__head-item">Appearance</span>
                        <span class="list__head-item">Action</span>
                    </div>

                    <div class="list__items-wrapper">
                        <card v-for="char in characters" :charData="char" :key="char.name" @edit="editCard" @change-view="changeView" ></card>
                    </div>

                </div>

            </template>   

        </transition>



    
    </div>
</template>

<script>
import Heading from "./Heading"
import Card from './CharCard';
import Loader from './Loader';
import Counter from './Counter';

export default {
    name:"List",
    data(){
        return {
            isLoading: true,
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
        editCard: function(data){
            this.$emit("edit", data);
        },
        changeView: function(view){
            this.$emit("change-view", view);
        },
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

            //filter records 
            const filteredList = allRecords.filter((person) => {
                const firstLetter = person.name.trim().toLowerCase().charAt(0);
                if( (firstLetter != "c") && (firstLetter != "b") && (firstLetter != "a") ){
                    return person;
                }
            })

            filteredList.forEach((person, index) => {
                const id = allRecords.findIndex((item)=>{
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
        Heading,
        Card,
        Loader,
        Counter
    }
}
</script>

<style lang="scss">
@import '../assets/scss/components/_char-list.scss';
</style>
