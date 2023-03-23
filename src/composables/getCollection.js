import { ref } from 'vue'
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) =>{

    const documents = ref(null)
    const error = ref(null)
    // const identity = ref('')

    let collectionRef = projectFirestore.collection(collection)
        // .orderBy('createdAt')

    collectionRef.onSnapshot( snap =>{
        console.log('snapshot')
        let results = []
        documents.value = []
        snap.docs.forEach(doc => {
            // doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
            results.push({ ...doc.data(), id: doc.id })
        });
        documents.value = results
        console.log(documents.value);
        console.log(documents.value.createdAt);
        // console.log(results);
        error.value = null
    }, (err)=>{
        console.log(err.message);
        documents.value = null
        error.value = 'Could not fetch data from database'
    })

    console.log('seen');
    // console.log(createdAt);
    console.log(documents.value);
    return { documents, error  }
}

export default getCollection