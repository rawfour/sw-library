<template>
    <div class="char-list">
         <card v-for="char in characters" :charData="char" :key="char.name" ></card>
    </div>
</template>

<script>
import Card from './CharCard';
export default {
    name:"List",
    data(){
        return {
            isLoading: false,
            isError: false,
            total: 0,
            characters: [],
            nextPage: null,
            prevPage: null,
        }
    },
    methods: {
        startLoading: function(){
          this.isLoading = true;
        },
        endLoading: function(){
          this.isLoading = false;
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
            this.characters = allRecords.filter((person) => {
                const firstLetter = person.name.trim().toLowerCase().charAt(0);
                if( (firstLetter != "c") && (firstLetter != "b") && (firstLetter != "a") ){
                    return person;
                }
            })

            
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
             this.isLoading = false;

        }else{
            this.endLoading();
            this.isError = true;
        }
    },
    components: {
        Card
    }
}
</script>