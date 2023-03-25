import Equivalences from "./English/Equivalences";
import Form from "./English/Form";
import Zones from "./English/Zones";
import FormEs from "./Spanish/FormEs"
import EquivalencesEs from "./Spanish/EquivalencesEs"
import ZonesEs from "./Spanish/ZonesEs"
import Footer from "./English/Footer"
import FooterEs from "./Spanish/FooterEs"
import useLanguage from "../hooks/useLanguage";

export default function Home() {

  const {language} = useLanguage()

  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-amber-200 via-amber-100 to-zinc-400">
      {language === 'EN' ? 
        <div className="w-screen min-h-screen flex flex-col items-center justify-between">
          <Form/>
          <Equivalences/>
          <Zones/>

          <Footer/>
        </div> :
        <div className="w-screen min-h-screen flex flex-col items-center justify-between">
          <FormEs/>
          <EquivalencesEs />
          <ZonesEs />

          <FooterEs/>
        </div>
      }
    </div>
  )
}
