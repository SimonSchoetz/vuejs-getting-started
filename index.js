const discography = [
    {id: 0, name: "Bukez Finezt - OMDHA Duck Trumpet RMX", release: "Let's Cut Some Wood EP", label: "", free: true, artwork:"https://i1.sndcdn.com/artworks-000190961768-zi5vec-t500x500.jpg", link: "https://bustedfingerz.bandcamp.com/album/lets-cut-some-wood-ep", date: "28 October 2016"},
    {id: 1, name: "Bittersweet", release: "Let's Cut Some Wood EP", label: "", free: true, artwork:"https://i1.sndcdn.com/artworks-000190961768-zi5vec-t500x500.jpg", link: "https://bustedfingerz.bandcamp.com/album/lets-cut-some-wood-ep", date: "28 October 2016"},
    {id: 2, name: "Synthstorm", release: "", label: "", free: true, artwork:"", link: "https://soundcloud.com/bustedfingerz/synthstorm?in=bustedfingerz/sets/free-downloads", date: "17 November 2016"},
    {id: 3, name: "OldGold & Rasper - Depth RMX", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "4 January 2017"},
    {id: 4, name: "The Widdler - Still Dream RMX", release: "", label: "Abysmal Entities", free: true, artwork:"", link: "https://soundcloud.com/abysmalentities/the-widdler-still-dream-busted-fingerz-rmx-ae-free-dl", date: "28 August 2017"},
    {id: 6, name: "Dub Killer - India RMX", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "27 October 2017"},
    {id: 7, name: "Heavy Korat - The Kettler Method RMX", release: "", label: "", free: true, artwork:"", link: "https://soundcloud.com/abysmalentities/heavy-korat-the-kettler-method-busted-fingerz-ziek-remix-ae-free-dl", date: "09 November 2017"},
    {id: 8, name: "Watchyastep", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "03 February 2017"},
    {id: 9, name: "Nap In The Park", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "15 March 2017"},
    {id: 10, name: "Dubamine & Blackout Ja - Nicodemus RMX", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "04 April 2017"},
    {id: 11, name: "FoG", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "27 June 2017"},
    {id: 12, name: "Error", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "25 September 2017"},
    {id: 13, name: "Ship Graveyard", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "22 March 2018"},
    {id: 14, name: "Pushloop - Secret Society RMX", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "31 January 2018"},
    {id: 15, name: "Dusty Circiut", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "29 May 2018"},
    {id: 16, name: "Scurr Tower", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "3 July 2018"},
    {id: 17, name: "ZiEK - Zombies RMX", release: "", label: "", free: true, artwork:"https://f4.bcbits.com/img/a2122187664_10.jpg", link: "https://ziek08.bandcamp.com/album/zombies", date: "18 October 2018"},
    {id: 18, name: "Mesck - Doomsayer RMX", release: "", label: "", free: true, artwork:"", link: "https://bustedfingerz.bandcamp.com/album/busted-care-package-17-18", date: "26 October 2018"},
    {id: 19, name: "Treetop", release: "", label: "", free: true, artwork:"", link: "https://soundcloud.com/bustedfingerz/busted-fingerz-treetop-1500-follower-free-dl", date: "03 September 2019"},
    {id: 21, name: "Anxiety", release: "Version Collective - Certified Organic Pt.3", label: "Version Collective", free: false,artwork:"https://f4.bcbits.com/img/a1354451014_10.jpg",  link: "https://versioncollective.bandcamp.com/album/certified-organic-3-vcc003", date: "27 December 2017"},
    {id: 22, name: "Discipline", release: "Version Collective - Certified Organic Pt.3", label: "Version Collective", free: false,artwork:"https://f4.bcbits.com/img/a1354451014_10.jpg",  link: "https://versioncollective.bandcamp.com/album/certified-organic-3-vcc003", date: "27 December 2017"},
    {id: 23, name: "Vibe Emissions - Warnings RMX", release: "Triathlon EP", label: "Silent Motion", free: false, artwork:"https://f4.bcbits.com/img/a1187720218_10.jpg", link: "https://silentmotionrecords.bandcamp.com/album/triathlon-ep", date: "17 August 2018"},
    {id: 24, name: "But Really, What Year Is It? w/ The Widdler", release: "Triathlon EP", label: "Silent Motion", free: false,artwork:"https://f4.bcbits.com/img/a1187720218_10.jpg", link: "https://silentmotionrecords.bandcamp.com/album/triathlon-ep", date: "17 August 2018"},
    {id: 25, name: "Never Ending Story", release: "Triathlon EP", label: "Silent Motion", free: false, artwork:"https://f4.bcbits.com/img/a1187720218_10.jpg", link: "https://silentmotionrecords.bandcamp.com/album/triathlon-ep", date: "17 August 2018"},
    {id: 26, name: "Rush", release: "Tease EP", label: "Version Collective", free: false, artwork:"https://f4.bcbits.com/img/a2010313167_10.jpg", link: "https://versioncollective.bandcamp.com/album/tease-ep-vcep022", date: "17 September 2018"},
    {id: 27, name: "Indigo w/ Oth", release: "Tease EP", label: "Version Collective", free: false, artwork:"https://f4.bcbits.com/img/a2010313167_10.jpg", link: "https://versioncollective.bandcamp.com/album/tease-ep-vcep022", date: "17 September 2018"},
    {id: 28, name: "Moving On", release: "Tease EP", label: "Version Collective", free: false, artwork:"https://f4.bcbits.com/img/a2010313167_10.jpg", link: "https://versioncollective.bandcamp.com/album/tease-ep-vcep022", date: "17 September 2018"},
    {id: 29, name: "Tease", release: "Tease EP", label: "Version Collective", free: false, artwork:"https://f4.bcbits.com/img/a2010313167_10.jpg", link: "https://versioncollective.bandcamp.com/album/tease-ep-vcep022", date: "17 September 2018"},
    {id: 30, name: "Little Regrets", release: "Version Collective - Certified Organic Pt.4", label: "Version Collective", free: false, artwork:"https://f4.bcbits.com/img/a2841744676_10.jpg", link: "https://versioncollective.bandcamp.com/album/certified-organic-4", date: "27 December 2018"},
    {id: 31, name: "Deciphered Mind - Clocktower RMX", release: "", label: "Sub Garden", free: true, artwork:"https://f4.bcbits.com/img/a2317096359_10.jpg", link: "https://subgarden.bandcamp.com/track/clocktower-busted-fingerz-remix-sgdnf053", date: "19 January 2019"},
    {id: 32, name: "Dark Corner w/ Vibe Emissions", release: "Worst Generation EP", label: "Subotage Records", free: false, artwork:"https://f4.bcbits.com/img/a3394552934_10.jpg", link: "https://subotage.bandcamp.com/album/worst-generation-ep-sub036-subotage-records", date: "05 April 2019"},
    {id: 33, name: "Jungle w/ Heavy Korat", release: "Worst Generation EP", label: "Subotage Records", free: false, artwork:"https://f4.bcbits.com/img/a3394552934_10.jpg", link: "https://subotage.bandcamp.com/album/worst-generation-ep-sub036-subotage-records", date: "05 April 2019"},
    {id: 34, name: "Roklem w/ Devastated", release: "Worst Generation EP", label: "Subotage Records", free: false, artwork:"https://f4.bcbits.com/img/a3394552934_10.jpg", link: "https://subotage.bandcamp.com/album/worst-generation-ep-sub036-subotage-records", date: "05 April 2019"},
    {id: 35, name: "Annias - Unseen Frequencies RMX", release: "", label: "", free: false, artwork:"https://f4.bcbits.com/img/a2885809734_10.jpg", link: "https://annias.bandcamp.com/track/annias-unseen-frequencies-busted-fingerz-remix", date: "15 April 2020"},
    {id: 36, name: "Reckless w/ Grawinkel", release: "Reckless / Data Dungeon", label: "Artikal", free: false, artwork:"https://f4.bcbits.com/img/a0930028525_10.jpg", link: "https://artikalmusic.bandcamp.com/album/reckless-data-dungeon", date: "24 April 2020"},
    {id: 37, name: "Ourman - Pacing RMX", release: "Pacing EP", label: "Silent Motion", free: false, artwork:"https://f4.bcbits.com/img/a3035268384_10.jpg", link: "https://silentmotionrecords.bandcamp.com/album/pacing-ep", date: "24 April 2020"},
    
].sort((entryA, entryB) => new Date(entryB.date) - new Date(entryA.date));

const app = new Vue ({
    el: "#app", 
    data: {
        discography: discography,
        likes: 0,
        hoverLike: false,
    },
    methods: {
        incrLikes() {
            this.likes ++
        },
    }
})
console.log(app.$root.hoverLike)