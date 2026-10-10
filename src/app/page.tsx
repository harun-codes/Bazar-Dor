import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Bannar";
import PriceDecrease from "@/components/PriceDecrease";
import PriceIncrease from "@/components/PriceIncrease";



export default function Home() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

            <Banner />
            <PriceIncrease/>
            <PriceDecrease/>
            <AllProducts/>

        </main>
    );
}