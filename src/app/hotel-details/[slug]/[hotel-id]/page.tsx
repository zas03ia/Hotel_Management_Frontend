import Head from 'next/head'
import Header from '@components/Header'
import Gallery from '@/components/Gallery'
import Menu from '@components/Menu'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { fetchHotel} from '@services/api';
import SecondHeader from '@/components/SecondHeader'
import PropertyBooking from '@/components/PropertyBooking'
import PropertyDetails from '@/components/PropertyDetails';
import PropertyDetailsContinued from '@/components/PropertyDetailsContinued';
import PropertyDetailsThird from '@/components/PropertyDetailsThird';

export default async function HomePage ({ params }: { params: { 'hotel-id': string } }){
  
    const { 'hotel-id': hotelId } = await params;

    if (!hotelId) {
        throw new Error("Missing hotel ID in params");
    }

    try {
        // Fetch hotel details
        const hotel = await fetchHotel(hotelId);
        if (!hotel) {
        return { notFound: true };
        }
  
    return (
    <>
      <Head>
        <title>Property Details</title>
      </Head>
      <Header />
      <div className="container max-w-5xl mx-auto px-4">
        <SecondHeader />
        <Gallery images={hotel.images} modalCaption={hotel.title} />
        <Menu />
        <PropertyBooking hotel={hotel} />
        <PropertyDetails hotel={hotel} />
        <PropertyDetailsContinued />
        <PropertyDetailsThird hotel={hotel} />
      </div>
      
    </>
  )} catch (error) {
    console.error("Failed to fetch hotel:", error);
    throw new Error("Server error: Unable to fetch hotel details");
  }
}


