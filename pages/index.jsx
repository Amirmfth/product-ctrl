import FixedBtns from "@/components/modules/FixedBtns";
import HomePage from "@/components/templates/HomePage";
import axios from "axios";


export default async function Home() {
  // const data =  await axios.post("http://localhost:3000/api/products",{type:"boissons" , name:"Eau plat" , status:"good" , description:""});
  
  return (
    <main className="container mx-auto p-10 px-3 text-darkChocolate">
      <HomePage />
      <FixedBtns />
    </main>
  );
}
