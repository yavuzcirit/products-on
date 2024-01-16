import Footer from "@/components/Footer";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import { IProduct } from "@/types";

async function getData() {
  const res = await fetch('https://s3-eu-west-1.amazonaws.com/fid-recruiting/fid-task-4-ffront-products.json')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home =async () => {
  const data : IProduct[] | undefined = await getData()
 
  return (
    <main>
     {data && 
      <>
        <NewProducts productsData={data}/>
        <Testimonial />
      </>
      }
    </main>
  );
  
}

export default Home