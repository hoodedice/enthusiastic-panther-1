import * as React from "react"

import Layout from "../components/layout"

const NotFoundPage = () => {
  const [isMount, setMount] = React.useState(false);
  
  React.useEffect(() => {
        setMount(true);
  },[])

  if(!isMount) {
     return(
        <div>loading</div>
     )
  }

  return (<Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>)

}
export default NotFoundPage
