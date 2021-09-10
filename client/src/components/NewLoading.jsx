import React, { useState } from "react";
import Welcome from "./Welcome";

const NewLoading = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 3000)
  }, [])

  return isLoading ? 
  <Welcome /> : <Nav />
}

export default NewLoading;