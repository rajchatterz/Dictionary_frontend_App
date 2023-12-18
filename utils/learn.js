//"learn page api requests"
//"getWordCategories - GET word categories related to users."
import axios from 'axios';
import { base_url } from '../utils/constants'

async function word_categories(){
    const url = base_url + `/v1/wordifyme/user-word-category/65798b945026a7002a24e194`
    const response = await axios.get(url);
    console.log("Word Categories")
    console.log(response.data)
    return response.data;
  }

  // async function word_list(ListOfWords){
  //   const url = base_url + `/v1/wordifyme/word-list/65798b945026a7002a24e194`
  //   const response = await axios.get(url,{
  //     ListOfWords : ListOfWords
  //   });
  //   console.log('Word List ')
  //   console.log(response.data)
  //   return response.data
  // }

  export function get_wordcategories(){
    // console.log(wordcategory)
    return word_categories();
  }
  
  // export function send_list(ListOfWords){
  //   console.log(ListOfWords)
  //   return word_list(ListOfWords);
  // }