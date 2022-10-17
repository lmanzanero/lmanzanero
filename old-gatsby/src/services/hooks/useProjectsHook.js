import { useState, useEffect } from 'react'
import { getAllProjects } from '../repositories/api';

export default function useGetProjects (url) {
  const [ data, setData ] = useState([]);
  const [ isloading, setIsLoading ] = useState(false);
  const [ status, setStatus ] = useState('idle');
  const [ error, setError ] = useState('');

  useEffect(() => {
    if (!url) return;  
    getAllProjects(url, setIsLoading, setError, setData); 
  }, [url]);

  return { data, isloading, status, error };
}
