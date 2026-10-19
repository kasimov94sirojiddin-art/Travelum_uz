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
["How does the meeting at the hotel work?","Your driver meets you at your hotel with a name sign. We send the driver’s and guide's name, phone in WhatsApp before the trip."],
["Can I cancel the tour?","We run one-day tours only, so all bookings are non-refundable once paid."],
["How do I pay by card from abroad?","Pay 100% online when you book. Message us on WhatsApp (or emai) and we send a secure payment link."],
["Can I book at the last minute?","Yes. We work 24/7 and can arrange a tour even one day before the trip."],
["Are entrance tickets included?","Included in the Samarkand and Bukhara day trips. Not included in walking tours or the mountain trip (cable car is extra)."],
["What vehicles do you use?","Air-conditioned sedans, minivans or big minivans, depending on group size and availability on the day."]];
