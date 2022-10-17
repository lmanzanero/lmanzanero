const getAllProjects = async (url, setIsLoading, setError, setData) => {
         await setIsLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json(); 
          await setData(data); 
          await setIsLoading(false);
        } catch (error) {
          await setError(error);
          await setIsLoading(false)
        }  
}

const getAllPosts = async () => {
  return await fetch('https://lmanzanero.herokuapp.com/projects')
  .then(response => response.json())
  .then(json => console.log(json));
}

export { getAllPosts, getAllProjects }