const WA="https://wa.me/998886473030",PH="+998 88 647 30 30",MAIL="kasimov94sirojiddin@gmail.com",
ORG="https://orginfo.uz/en/organization/49abafc1b90f/";
const TOURS=[
{id:"samarkand",img:"assets/samarkand.jpg",name:"Samarkand — day trip",lead:"City of great empires, beautiful architecture and eastern atmosphere.",
 meta:["310 km · 4h from Tashkent","5-6 hours in Samarkand"],
 prog:["Gur-Emir Mausoleum","Registan Square","Bibi-Khanym Mosque","Hazrat Khizr Mosque with panoramic view","Shahi-Zinda Necropolis","Siab Bazaar"],
 inc:["Round-trip transfer","Tour guide","Excursions per program","Entrance tickets"],exc:["Lunch","Personal expenses"],
 prices:[[1,507,"sedan"],[2,288,"sedan"],[3,274,"minivan"],[4,223,"minivan"],[5,192,"minivan"],[6,172,"minivan"],[7,171,"minivan"],[8,158,"minivan"],[10,144,"minivan"],[15,127,"minivan"]]},
{id:"mountains",img:"assets/amirsay.webp",name:"Amirsay, Chimgan, Charvak — day trip",lead:"Tien Shan peaks, pine forests and the mirror-like Charvak reservoir.",
 meta:["80 km · 2h from Tashkent","8-10 hours"],
 prog:["Amirsoy resort and ascent to Kumbel Peak (2,290 m)","Views of Big and Small Chimgan","Chimgan gorges, horseback rides","Mountain serpentine above the “Uzbek Sea”","Blue shores of Charvak Reservoir","Petroglyphs and centuries-old plane trees"],
 inc:["Round-trip transfer","Tour guide","Excursions per program"],exc:["Cable car: $10-$18 depending on day and age","Lunch","Horse riding"],
 prices:[[1,329,"sedan"],[2,165,"sedan"],[3,133,"minivan"],[4,100,"minivan"],[5,80,"minivan"],[6,67,"minivan"],[7,65,"minivan"],[8,62,"minivan"],[15,33,"big minivan"],[18,30,"big minivan"]]},
{id:"bukhara",img:"assets/bukhara.jpg",name:"Bukhara — day trip",lead:"Silk Road city of medieval mosques, minarets and covered trading domes.",
 meta:["440 km · 4h by Afrosiyob high-speed train","6-7 hours in Bukhara"],
 prog:["Lyabi-Khauz Ensemble, Magoki-Attori Mosque","Chor-Minor Madrasah","Trading Domes","Ulugbek and Abdulazizkhan Madrasahs","Po-i-Kalyan Complex","Ark Citadel","Bolo-Khauz Mosque","Ismail Samani and Chashma-Ayub Mausoleums"],
 inc:["Station / airport transfers","Train ticket Tashkent → Bukhara","Flight Bukhara → Tashkent","Professional guide","Entrance tickets"],exc:["Lunch and dinner","Personal expenses"],
 prices:[[1,550,""],[2,386,""],[3,360,""],[4,325,""],[5,305,""],[6,291,""],[7,293,""],[8,285,""]]}];
const WALK=[
["Tashkent","Old City & Khazret-Imam complex, Chorsu Bazaar, Tashkent Metro ride, Amir Timur & Independence Squares, Sacred Heart Cathedral, Applied Arts Museum.",1],
["Samarkand","Registan Square, Siab Bazaar, Bibi Khanum Mosque, Shakhi Zinda, Gur-Emir Mausoleum.",0],
["Bukhara","Lyabi-Hauz, Magoki-Attori, four trade domes, Poi Kalyan, Ulugbek & Abdulazizkhan Madrasahs, Ark Fortress, Bolo-Khauz, Samanid Mausoleum.",0],
["Khiva","Ichan Kala: Kalta Minor, Madrasas, Juma Mosque with 212 columns, Tash-Hauli Palace, Pahlavan Mahmud, Islam Khodja minaret.",0],
["Kokand","Khudoyar-Khan Palace, Regional Studies Museum, Jami Mosque, Kamol-Kazy and Norbutabiy Madrasahs.",1],
["Shakhrisabz","Dorus Saodat, Dor-ut Tilovat & Kok-Gumbaz Mosque, Ak-Saray Palace ruins.",1],
["Termez","Kokildor-Ota Khanaka, Kyrk-Kyz, Sultan Saodat, Archaeology Museum, Kara-Tepe & Fayaz-Tepe, Al-Hakim at-Termezi, Zurmala stupa.",1]];

const REVIEWS=[
["Samarkand","Anna, Germany","Samarkand blew us away! The organization was seamless from start to finish. Our guide made the history of Registan come alive with fascinating stories. Highly recommend this team!"],
["Bukhara","Michael, UK","An unforgettable trip to Bukhara! Walking through the old streets felt like stepping back in time. Everything was so well thought out, punctual, and comfortable."],
["Chimgan","Elena, Russia","Breathtaking mountain views and amazing nature! The itinerary was perfectly balanced—enough active walking and time to relax. Can’t wait to come back!"]];
const FAQ=[
["How does the meeting at the train station work?","Your driver meets you at your hotel in Tashkent with a name sign. We send the driver's and guide’s name, phone in WhatsApp before the trip."],
["Can I cancel the tour?","We run one-day tours only, so all bookings are non-refundable once paid."],
["How do I pay by card from abroad?","Pay 100% online when you book. Message us on WhatsApp and we send a secure payment link."],
["Can I book at the last minute?","Yes. We work 24/7 and can arrange a tour even one day before the trip."],
["Are entrance tickets included?","Included in the Samarkand and Bukhara day trips. Not included in walking tours or the mountain trip (cable car is extra)."],
["What vehicles do you use?","Air-conditioned sedans, minivans or big minivans, depending on group size and availability on the day."]];
const VEH=[["Sedan","1–2 pax","Standard passenger car"],["Van","3–5 pax","Minivan"],["Van","6–8 pax","Large minivan / minibus"]];
// [region, group, route, [sedan, van 3-5, van 6-8], {c:codes/distance, b:bonus, a:add-on, e:[extra per vehicle], l:extra label}]
const TR=[
["Tashkent & surroundings","City tours","City tour: Tashkent / Samarkand / Bukhara / Nukus / Termez",[85,140,180],{c:"TAS / SKD / BHK / NCU / TMJ"}],
["Tashkent & surroundings","Mountains & countryside","Tashkent – Chimgan / Charvak – Tashkent",[110,160,200],{a:"Add-on: Institute of the Sun +$30 sedan / +$40 van"}],
["Tashkent & surroundings","Border transfers from Tashkent","Tashkent – Oybek Border + round trip",[110,180,210],{e:[30,40,40],l:"additional service / return"}],
["Tashkent & surroundings","Border transfers from Tashkent","Tashkent – Chernayavka Border",[60,100,130],{c:"Zhibek Zholy"}],
["Intercity from Tashkent","Intercity transfers","Tashkent – Samarkand",[170,320,400],{c:"TAS – SKD",b:"stop for Jizzakh Somsa"}],
["Intercity from Tashkent","Intercity transfers","Tashkent – Samarkand – Tashkent",[250,400,500],{c:"TAS – SKD – TAS"}],
["Intercity from Tashkent","Intercity transfers","Tashkent – Fergana Valley (2 days / 1 night)",[260,400,400],{c:"TAS – FEG 2d/1n + AZN",e:[50,null,null],l:"AZN"}],
["Intercity from Tashkent","Intercity transfers","Dostlik Border – Kokand – Tashkent (1 day)",[200,null,null]],
["Samarkand & routes","Routes from Samarkand","Samarkand – Shahrisabz – Samarkand",[90,160,160],{c:"SKD – SHZ – SKD",b:"visit & taste Tandir-Gusht"}],
["Samarkand & routes","Routes from Samarkand","Samarkand – Jartepa Border + round trip",[75,120,120],{e:[25,30,30],l:"additional service"}],
["Samarkand & routes","Routes from Samarkand","Samarkand – Termez (2 days)",[360,550,650],{c:"SKD – TMJ"}],
["Samarkand & routes","Routes from Samarkand","Samarkand – Bukhara",[170,320,400],{c:"SKD – BHK",b:"visit Rabot Malik & Gijduvan"}],
["Samarkand & routes","Routes from Samarkand","Samarkand – Shahrisabz – Bukhara",[200,370,440],{c:"SKD – SHZ – BHK"}],
["Bukhara & desert","Regional routes","Bukhara – Gijduvan – Bukhara",[90,140,170],{c:"50 km"}],
["Bukhara & desert","Regional routes","Bukhara – Farab Border",[110,160,190],{c:"100 km"}],
["Bukhara & desert","Regional routes","Bukhara Sufi Tour",[130,230,290],{c:"7 Pirs / Sufi shrines"}],
["Bukhara & desert","Regional routes","Bukhara – Khiva",[180,340,420],{c:"BHK – KHV",b:"visit Ulli Hovli Turkmen Village"}],
["Bukhara & desert","Multi-day yurts & desert tours via Nurata","Bukhara – Nurata – Samarkand (2 days / 1 night)",[280,440,440],{c:"NRT"}],
["Bukhara & desert","Multi-day yurts & desert tours via Nurata","Bukhara – Nurata – Samarkand (3 days / 2 nights)",[400,560,560],{c:"NRT"}],
["Khiva & Karakalpakstan","Local transfers & borders","Urgench Airport pick-up / drop-off",[35,60,70],{c:"UGC"}],
["Khiva & Karakalpakstan","Local transfers & borders","Khiva Train Station pick-up / drop-off",[20,50,60]],
["Khiva & Karakalpakstan","Local transfers & borders","Khiva – Shavat / Dashoguz Border",[80,140,180],{c:"60 km"}],
["Khiva & Karakalpakstan","Fortresses & Nukus routes","Khiva – Ayaz-Kala & Toprak-Kala – Khiva",[120,180,220]],
["Khiva & Karakalpakstan","Fortresses & Nukus routes","Khiva – Ayaz-Kala / Toprak-Kala – Nukus",[170,270,320],{c:"NCU"}],
["Khiva & Karakalpakstan","Fortresses & Nukus routes","Khiva – Nukus",[120,240,280],{c:"KHV – NCU",b:"visit Chilpyk / Shilpik Kala"}],
["Nukus, Moynaq & Fergana","Routes","Nukus – Moynaq (Aral Sea) – Nukus",[130,280,280],{c:"NCU – MOY – NCU"}],
["Nukus, Moynaq & Fergana","Routes","Fergana City Tour",[95,160,160]]];
