var colorlist = ['#ff0000','#ffa600','#15ff00','#00ffea','#6f00ff','#1900ff','#00ff73','#fffb00','#9900ff']


function givecolor(){
var thiscolor1 = Math.round(Math.random() * colorlist.length) 
document.getElementById("colorLeft").style.backgroundColor  = colorlist[thiscolor1]
var thiscolor2 = Math.round(Math.random() * colorlist.length)
document.getElementById("colorRight").style.backgroundColor  = colorlist[thiscolor2]
    if (thiscolor1 === thiscolor2){
        givecolor()
    }
}




function leftclick(){
    checker(0)

}
function rightclick(){
    checker(1)
    
}
// fact list

var score = 0
function checker (a){

    if (a === 0){

        if (lefttrue){
            console.log("correct")
            correct()
        }else{
            console.log("wrong")
            wrong()
        }


    }else if (a=== 1){
         if (!lefttrue){
            console.log("correct")
            correct()
        }else{
            console.log("wrong")
            wrong()
        }
    }

    factmaker()
}

function correct () {
    score += 1
document.getElementById("status").innerHTML = "correct"
document.getElementById("status").style.color = "green"
setTimeout(function(){document.getElementById("status").innerHTML = "score: "+score; document.getElementById("status").style.color = "white"},3000)
}
function wrong() {
    score =0
    document.getElementById("status").innerHTML = "wrong"
    document.getElementById("status").style.color = "red"
    setTimeout(function(){document.getElementById("status").innerHTML = "score: "+score; document.getElementById("status").style.color = "white"},3000)
}


var fact = [
    "Mister Rogers always mentioned out loud that he was feeding his fish because a young blind viewer once asked him to do so. She wanted to know the fish were OK.",
    "Boring, Oregon and Dull, Scotland have been sister cities since 2012. In 2017, they added Bland Shire, Australia to their ‘League of Extraordinary Communities.’",
    "Amelia Earhart and Eleanor Roosevelt once sneaked out of a White House event, commandeered an airplane, and went on a joyride to Baltimore.",
    "If you have the feeling you’ve experienced an event before in real life, call it déjà vu. If you feel like you’ve previously experienced an event in a dream instead, there’s a different term for it: déjà rêvé.",
    "During Prohibition, moonshiners would wear ‘cow shoes.’ The fancy footwear left hoofprints instead of footprints, helping distillers and smugglers evade police.",
    "Since founding the Imagination Library in 1995, Dolly Parton has donated 100 million books to children.",
    "The 100 folds in a chef's toque are said to represent 100 ways to cook an egg.",
    "In curling, good sportsmanship and politeness are essential. Congratulating opponents and abstaining from trash talk are part of what's known as the ‘Spirit of Curling.’",
    "In 1974, the Journal of Applied Behavior Analysis published a paper titled ‘The Unsuccessful Self-Treatment of a Case of 'Writer's Block.’ It contained a total of zero words.",
    "Guinness estimates that 93,000 liters of beer are lost in facial hair each year in the UK alone.",
    "George Washington served an eggnog-like drink to visitors at Mount Vernon. His recipe included rye whiskey, rum, and sherry.",
    "Some cats are allergic to humans.",
    "Queen Elizabeth II is a trained mechanic.",
    "Volvo gave away the 1962 patent for their revolutionary three-point seat belt for free, in order to save lives.",
    "Tsundoku is the act of acquiring books and not reading them.",
    "Ravens in captivity can learn to talk better than parrots.",
    "Bela Lugosi was buried in full Dracula costume—cape and all.",
    "Central Park's lampposts contain a set of four numbers that can help you navigate. The first two tell you the nearest street, and the next two tell you whether you're closer to the east or west side of the park (even numbers signal east, odd signals west).",
    "A teacher wrote of a young Roald Dahl on his school report card: ‘I have never met anybody who so persistently writes words meaning the exact opposite of what is intended.‘",
    "You can still visit Blockbuster stores in Alaska and Oregon.",
    "Blood donors in Sweden receive a thank you text when their blood is used.",
    "Kea parrots warble together when they're in a good mood, making them the first known non-mammal species to communicate with infectious laughter.",
    "Long before rap battles, there was ‘flyting’: the exchange of witty, insulting verses. The verbal throwdowns were popular in England and Scotland from the 5th to 16th centuries.",
    "Melbourne gave some of its trees email addresses so residents could report problems. Instead, the trees received love letters.",
    "An estimated 1 million dogs in the U.S. have been named primary beneficiary in their owners' wills.",
    "At Petrified Forest National Park, visitors sometimes break the rules (and the law) by taking rocks home with them. According to rangers, they often end up returning the stolen goods in the mail—along with an apology note.",
    "The Russians showed up 12 days late to the 1908 Olympics in London because they were using the Julian calendar instead of the Gregorian calendar.",
    "Maya Angelou was the first black female streetcar conductor in San Francisco.",
    "In Japan, letting a sumo wrestler make your baby cry is considered good luck.",
    "J.K. Simmons has been the voice of the Yellow Peanut M&M since the late 1990s.",
    "Count von Count's love of numbers isn't just a quirky character trait—in traditional vampire folklore, the bloodsuckers have arithmomania, a compulsion to count.",
    "In Great Britain and Japan, black cats are perceived as auspicious. In the English Midlands, new brides are given black cats to bless their marriage, and the Japanese believe that black cats are good luck—particularly for single women.",
    "Portland was named by a coin flip. Had the coin landed the other way, the city would be Boston, Oregon.",
    "During World War I, a Canadian soldier made a black bear his pet and named her Winnipeg. “Winnie” was later a resident of the London Zoological Gardens where she was an adored attraction, especially to a boy named Christopher Robin, son of author A.A. Milne. The boy even named his teddy bear after her.",
    "Sleep literally cleans your brain. During slumber, more cerebrospinal fluid flushes through the brain to wash away harmful proteins and toxins that build up during the day.",
    "Neil Armstrong's astronaut application arrived a week past the deadline. A friend slipped the tardy form in with the others.",
    "Due to the restaurant's reputation for staying open in extreme weather, the so-called “Waffle House Index” is informally used by FEMA to gauge storm severity.",
    "The first sales pitch for the Nerf ball was “Nerf: You can’t hurt babies or old people!”",
    "The manchineel tree is nicknamed the ‘Tree of Death’ for good reason: Touching it can leave chemical burns on your skin, its fruit is toxic, and its bark—when burned—can cause blindness.",
    "If drivers adhere to the 45 mph speed limit on a stretch of Route 66 in New Mexico, the road's rumble strips will play a rendition of ‘America the Beautiful.’",
    "Russian cosmonauts used to pack a shotgun in case they landed in Siberia and had to fend off bears.",
    "Space has a distinct smell: a bouquet of diesel fumes, gunpowder, and barbecue. The aroma is mostly produced by dying stars.",
    "Before settling on the Seven Dwarfs we know today, Disney considered Chesty, Tubby, Burpy, Deafy, Hickey, Wheezy, and Awful.",
    "The annual number of worldwide shark bites is 10 times less than the number of people bitten by other people in New York.",
    "In 1997 a Louisville woman left actor Charles Bronson all of her money in a handwritten will—a total of about $300,000. She'd never met him; she was just a fan.",
    "Carly Simon's dad is the Simon of Simon and Schuster. He co-founded the company.",
    "Ben & Jerry learned how to make ice cream by taking a $5 correspondence course offered by Penn State. (They decided to split one course.)",
    "After an online vote in 2011, Toyota announced that the official plural of Prius was Prii.",
    "At the 1905 wedding of Franklin and Eleanor Roosevelt, President Teddy Roosevelt gave away the bride.",
    "Tootsie Rolls were added to soldiers' rations in World War II for their durability in all weather conditions.",
    "When Canada's Northwest Territories considered renaming itself in the 1990s, one name that gained support was ‘Bob.’",
    "After OutKast sang ‘Shake it like a Polaroid picture,’ Polaroid released a statement: ‘Shaking or waving can actually damage the image.’",
    "Marie Curie remains the only person to earn Nobel prizes in two different sciences.",
    "The Starry Night depicts Vincent van Gogh's view from the Saint-Paul de Mausole asylum.",
    "The ampersand symbol is formed from the letters in et—the Latin word for ‘and.’",
    "Army ants that misinterpret the scent trails left by other ants will sometimes break from the crowd and march in circles. If enough ants join, they can form massive ‘death spirals.’",
    "A solar eclipse helped end a six-year war in 585 BCE. When the sky suddenly darkened during a battle between the Lydians and the Medes in modern Turkey, soldiers took it as a sign to cease fighting.",
    "Wendy's founder Dave Thomas dropped out of high school but earned his GED in 1993. His GED class voted him Most Likely to Succeed.",
    "Both John Adams and Thomas Jefferson died on July 4, 1826—exactly 50 years after the adoption of the Declaration of Independence.",
    "Dogs are capable of understanding up to 250 words and gestures. The average dog is as intelligent as a two-year-old child.",
    "Bubbles keep your bath water warmer longer.",
    "Scientists have found evidence of take-out restaurants in the remains of Pompeii.",
    "Fried chicken was brought to America by Scottish immigrants.",
    "Peter Durand patented the tin can in 1810. Ezra Warner patented a can opener in 1858. In between, people used chisels and hammers.",
    "There are 71 streets in Atlanta with ‘Peachtree’ in their name.",
    "Goats have rectangular pupils.",
    "The bend in a flamingo's leg isn't a knee—it's an ankle.",
    "In 1946, Boston owner Walter Brown chose the nickname Celtics over Whirlwinds, Olympians, and Unicorns.",
    "After It's the Great Pumpkin, Charlie Brown aired, Charles Schulz was overwhelmed with candy shipments sent from kids who were concerned for Charlie, who got rocks instead of treats in his Halloween sack.",
    "One of the world's largest stockpiles of nuclear weapons—a U.S. Navy base near Seattle—is partially defended by trained dolphins.",
    "It's illegal for supermarkets in France to waste food. Supermarkets must either compost it or donate unsold or nearly expired goods to charity.",
    "Fredric Baur invented the Pringles can. When he passed away in 2008, his ashes were buried in one.",
    "A new baby can cost new parents 750 hours of sleep in the first year.",
    "In 1965, a Senate subcommittee predicted that by 2000, Americans would only be working 20 hours a week with seven weeks vacation.",
    "For one day in 1998, Topeka, Kansas, renamed itself ‘ToPikachu’ to mark Pokemon's U.S. debut.",
    "Truman Capote said he was the only person who'd met John F. Kennedy, Bobby Kennedy, Lee Harvey Oswald, and Sirhan Sirhan.",
    "Susan B. Anthony was fined $100 for voting in the 1872 election. She never paid the fine.",
    "Canned pumpkin isn't actually pumpkin. Even purees that advertise as ‘100 percent pumpkin’ are actually made of a range of different winter squashes.",
    "When Gene Wilder accepted the role of Willy Wonka, he had one condition: In his first appearance, Wilder wanted Wonka to limp toward the crowd with a cane in hand before falling into a perfect somersault and jumping back up. The reason? “Because from that time on, no one will know if I’m lying or telling the truth.”",
    "Dr. Seuss said he expected to spend ‘a week or so’ writing The Cat in the Hat. It actually took a year and a half.",
    "The Reese in Reese's Peanut Butter Cups is Harry Burnett Reese, a former Hershey employee who created his famous candy in the 1920s.",
    "The plural of cul-de-sac is culs-de-sac.",
    "Apollo 17 astronaut Harrison Schmitt was allergic to moon dust.",
    "At the Gettysburg reunion in 1913, two men purchased a hatchet, walked to the site where their regiments had fought, and buried it.",
    "‘Bloodcurdling’ isn't just an expression: Research shows that watching horror movies can increase a certain clotting protein in our bloodstreams.",
    "An episode of Peppa Pig was pulled from Australian television for teaching children not to fear spiders.",
    "A group of pugs is called a grumble.",
    "Before he wrote Goosebumps, R.L. Stine wrote the jokes for Bazooka Joe wrappers.",
    "In 1998, the U.S. Army tried developing a telepathic ray gun ‘where words could be transmitted to be heard like the spoken word, except that it could only be heard within a person’s head.’",
    "In 1967, the Nigerian Civil War ground to a halt for two days because both sides wanted to watch Pelé play in an exhibition soccer match.",
    "Winston Churchill's mother was born in Brooklyn.",
    "Jim Cummings is the voice of Winnie the Pooh. He calls sick kids in hospitals and chats with them in character.",
    "Before Google launched Gmail, ‘G-Mail’ was the name of a free email service offered by Garfield's website.",
    "Before the Nazis invaded Paris, H.A. and Margret Rey fled on bicycles. They were carrying the manuscript for Curious George.",
    "In colonial America, lobster wasn't exactly a delicacy. It was so cheap and plentiful it was often served to prisoners.",
    "Crayola means ‘oily chalk.’ The name combines craie (French for ‘chalk’) and ola (short for ‘oleaginous,’ or ‘oily’).",
    "Truman Show Delusion is a mental condition marked by a patient's belief that he or she is the star of an imaginary reality show.",
    "Cookie Monster is not changing his name. In a 2012 episode he said, ‘We've got to stop this Veggie Monster rumor before me reputation ruined.’",
    "Google's founders were willing to sell to Excite for under $1 million in 1999—but Excite turned them down.",
    "The medical term for ice cream headaches is sphenopalatine ganglioneuralgia.",

]


var notfact = [
    "The first bird to ever use an Xbox controller was a Kea called Parau.",
    "The gold in Tutankhamun’s tomb had been stolen from the tombs of other pharaohs.",
    "England’s biggest horticultural export is the fig.",
    "The same molecule that makes chicken taste like chicken can also be found in ground up oyster shells.",
    "Prince Phillip is widely credited with the invention of the party popper.",
    "Thyme is technically a tree.",
    "By definition a snake’s body is a limb.",
    "The roller coaster was invented during the Hundred Years’ War as a way of launching supplies across rivers.",
    "The toenail of your little toe is called the ‘spungle’.",
    "Courgette is actually the feminine noun of cucumber.",
    "The first video ever uploaded to Youtube had to be taken down in 2016 for violating their Terms of Service.",
    "There is a nerveless area of skin half the size of a playing card on the top of your foot. Your brain compensates for it.",
    "The biggest arms manufacturer in the world is Hasbro.",
    "By weight, bay leaves contain more caffeine than coffee beans. They are used to make a stimulating tea in Morocco.",
    "Vikings never fired flaming arrows at boats carrying the dead. They would sink them by running them over with a larger boat.",
    "There is a ‘Buzzy Bee’ still at the top of Mt Everest, left there by Edmund Hillary.",
    "Originally the Fonz was going to wear a leather vest but the popularity of the Village People made them switch to a jacket.",
    "Johnny Cash once got into a fist fight with Colonel Sanders over a sports game.",
    "There are more submarines in lakes right now than there are in the oceans.",
    "Gold nuggets were named after chicken nuggets – not the other way around.",
    "Buzz Aldrin left a pen on the moon after the first visit. Eugene Cernan, the last moon walker, found it. It still worked.",
    "There is a pattern on the inside of your upper eyelid that is as unique as your fingerprint.",
    "At least two unconnected cultures have used sparrow skulls as a form of currency.",
    "The President of Senegal was one of the scientists who developed the Large Hadron Collider.",
    "The kneecap is the roundest part of your body.",
    "The Nobel Prize for Physics has been awarded to a scientist who proved that a tree falling in the woods really does make a sound.",
    "JRR Tolkien refused to let his books be read out loud to people until after his death, preferring to keep his words ‘on the page’.",
    "Paris Hilton and Nicole Richie’s ‘The Simple Life’ is one of the most syndicated TV shows in the world.",
    "All fossils found in Canada belong to the Queen.",
    "The first sunglasses were actually animal skin scraped so thin that it became transparent.",
    "Sun Tzu’s ‘The Art of War’ is a sequel. The first book is lost forever.",
    "One of the gems on the Crown Jewels is a marble glued there by Edward the Confessor’s son.",
    "Researchers in the Antarctic will use apply whitening toothpaste to their drills when boring into the ice shelf.",
    "Due to the inclusion of certain metal isotopes in its construction, the standard trombone is actually radioactive.",
    "‘Bat Out of Hell’ was written by Meatloaf after an argument with Ozzy Osborne.",
    "The word ‘Loanshark’ was originally, ‘Loans, hark’.",
    "Jellified red wine was used as a lubricant by the ancient Greeks.",
    "One of the rings of Saturn is almost pure silver dust.",
    "Every member of Iron Maiden was a Quaker.",
    "The national anthem of Lithuania is palindromic. It plays backwards exactly the same way that it plays forwards.",
    "In Brazil they call Brazil nuts ‘Argentines’.",
    "The first pair of scissors was left-handed.",
    "The @ symbol was invented by Charles de Gaulle.",
    "Every member of The Baha Men is dead.",
    "A furlong was defined as the distance a mule can run in two minutes.",
    "The Eiffel Tower has bumps along its ‘legs’ that spell the French national motto in braille.",
    "The phrase, ‘If pain persists, see your doctor’ has been copyrighted by Bayer.",
    "Venetian blinds were invented in Venice.",
    "Cat Stevens first name is Catherine.",
    "The first copy of the Oxford English dictionary is missing the word ‘dictionary’.",
    "New Zealanders use more toilet paper per capita than any other country.",
    "Otters have been known to coat stones with fish scales to lure in birds.",
    "The largest sushi roll ever made would be impossible to transport through the Channel Tunnel.",
    "Morris dancing was invented by a guy called Morris.",
    "95% of people are pronouncing the name of the band ‘Live’ incorrectly.",
    "X-rays cannot pass through Velcro.",
    "The Boy Scouts were counted as part of the American military until 1986.",
    "Once a year all of Wikipedia is printed off and placed in a vault in Norway.",
    "While Thomas Crapper didn’t invent the toilet, he was killed by one.",
    "A copy of Detective Comics #38 exists with an error that has Batman constantly refer to his sidekick as ‘Bobin’.",
    "The producers of the movie ‘Air Bud’ are currently suing Apple for copyright infringement.",
    "Genghis Khan brought dressage to Europe.",
    "Resene has a 100 year contract to provide paint for the Hoover Dam.",
    "Where’s Wally books are used in the entry exam for MI6.",
    "Bubbles have a seam.",
    "In Lesotho it is considered rude not to offer someone a bite of your food before you start eating.",
    "Dave Bautista has been the leader of an improv troupe for the past twenty years.",
    "The National Library of Singapore uses woven human hair for bookmarks to preserve the condition of the pages.",
    "Percy Bysshe Shelley’s ‘Prometheus Unbound’ contains the first use of the word ‘Whoops’.",
    "An adolescent owl is called a ‘novice’.",
    "On average, three people are injured every time an audience gives a standing ovation.",
    "Napoleon was ashamed of his nipples and refused to let anyone see them. Even during medical treatments.",
    "There are no synonyms for thesaurus.",
    "‘The Fellowship of the Ring’ is the most stolen book in the world.",
    "Peppermint can’t be smelt by guinea pigs.",
    "The Lego headquarters has had to be rebuilt three times due to shoddy construction.",
    "MRI scans of cat brains have revealed that they see humans as a prey species.",
    "The lowest tone that can be hit by a specific tuba is called the ‘crass’.",
    "The ‘Peter Piper Procession’ is a yearly contest wherein participants compete to say the ‘Peter Piper’ tongue twister the fastest.",
    "Examination of recently discovered texts indicates that the Hittites first invented the slinky.",
    "Today more messages are sent using carrier pigeons than are sent via fax.",
    "The banjoist from the ‘Duelling Banjos; scene of Deliverance was offered a record deal. It reached number 15 on the Billboard charts.",
    "According to the International Federation of Poker, socks don’t count as an item of clothing in strip poker.",
    "The Geneva Convention’s prohibition of improper use of distinctive emblems during warfare also applies to the Jolly Roger.",
    "Every screw used in the construction of Vatican City has a cross on the head. They must never be upside down.",
    "The shoes of King Edward IV were weighted with lead to make his walk seem more imposing.",
    "During the breeding season, female cockroaches smell like pineapple.",
    "The music of the band ‘Rush’ has been featured in more video games than any other band or musician.",
    "Emeril Lagasse refused to ever use a spatula.",
    "Kevin Bacon founded an organisation that re-homes rescued factory farm pigs.",
    "Voltaire’s father was a cobbler.",
    "In American Football, touchdowns were originally called ‘tapstops’.",
    "The names of all missing persons in Honduras are kept in a register called ‘The Imponderables’.",
    "There exists a Sherlock Holmes story containing a kiss between Holmes and Watson but all copies are held by the Doyle estate.",
    "The founders of Johnson & Johnson were not related.",
    "A solid gold fidget spinner has been made, but it broke its first users index finger due to its weight.",
    "The longest game of mah-jong ever lasted for three years. It finished when the house it was being played in burned down.",
    "In Argentina, ‘Where in the World is Carmen San Diego’ is called, ‘In Pursuit of the Red Rebellious Bird’.",
    "Historical records indicate that the dairy cow’s moo used to be significantly louder than it currently is.",
    "Penguins have wavy feathers that produce a similar effect when moving through water as golf ball dimples do in the air.",

];

//end fact list

var lefttrue = false
var thisfact
var thisnotfact
var speaktext
function factmaker () {
    if (Math.round(Math.random() * 2) === 1 ) {
        lefttrue = true
        thisfact = fact[Math.round(Math.random() * fact.length)]
        thisnotfact = notfact[Math.round(Math.random() * notfact.length)]
        document.getElementById("fectleft").innerHTML = thisfact
        document.getElementById("fectright").innerHTML = thisnotfact
        speaktext =thisfact +", or,"+ thisnotfact
    }else {
        lefttrue = false
        thisfact = fact[Math.round(Math.random() * fact.length)]
        thisnotfact = notfact[Math.round(Math.random() * notfact.length)]
        document.getElementById("fectright").innerHTML = thisfact
        document.getElementById("fectleft").innerHTML = thisnotfact
        speaktext = thisnotfact +", or,"+ thisfact
    }
    givecolor()
}
factmaker()

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 2; //0 to 2
       msg.lang = 'en-US';

var isspeaking = false
function speak(){
if (isspeaking){}else{
    isspeaking = true


    msg.text = speaktext;
 
    
        msg.onend = function(e) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
            isspeaking = false
         };
      
      speechSynthesis.speak(msg);
    }
}


// fact list

var fact = [
    "Mister Rogers always mentioned out loud that he was feeding his fish because a young blind viewer once asked him to do so. She wanted to know the fish were OK.",
    "Boring, Oregon and Dull, Scotland have been sister cities since 2012. In 2017, they added Bland Shire, Australia to their ‘League of Extraordinary Communities.’",
    "Amelia Earhart and Eleanor Roosevelt once sneaked out of a White House event, commandeered an airplane, and went on a joyride to Baltimore.",
    "If you have the feeling you’ve experienced an event before in real life, call it déjà vu. If you feel like you’ve previously experienced an event in a dream instead, there’s a different term for it: déjà rêvé.",
    "During Prohibition, moonshiners would wear ‘cow shoes.’ The fancy footwear left hoofprints instead of footprints, helping distillers and smugglers evade police.",
    "Since founding the Imagination Library in 1995, Dolly Parton has donated 100 million books to children.",
    "The 100 folds in a chef's toque are said to represent 100 ways to cook an egg.",
    "In curling, good sportsmanship and politeness are essential. Congratulating opponents and abstaining from trash talk are part of what's known as the ‘Spirit of Curling.’",
    "In 1974, the Journal of Applied Behavior Analysis published a paper titled ‘The Unsuccessful Self-Treatment of a Case of 'Writer's Block.’ It contained a total of zero words.",
    "Guinness estimates that 93,000 liters of beer are lost in facial hair each year in the UK alone.",
    "George Washington served an eggnog-like drink to visitors at Mount Vernon. His recipe included rye whiskey, rum, and sherry.",
    "Some cats are allergic to humans.",
    "Queen Elizabeth II is a trained mechanic.",
    "Volvo gave away the 1962 patent for their revolutionary three-point seat belt for free, in order to save lives.",
    "Tsundoku is the act of acquiring books and not reading them.",
    "Ravens in captivity can learn to talk better than parrots.",
    "Bela Lugosi was buried in full Dracula costume—cape and all.",
    "Central Park's lampposts contain a set of four numbers that can help you navigate. The first two tell you the nearest street, and the next two tell you whether you're closer to the east or west side of the park (even numbers signal east, odd signals west).",
    "A teacher wrote of a young Roald Dahl on his school report card: ‘I have never met anybody who so persistently writes words meaning the exact opposite of what is intended.‘",
    "You can still visit Blockbuster stores in Alaska and Oregon.",
    "Blood donors in Sweden receive a thank you text when their blood is used.",
    "Kea parrots warble together when they're in a good mood, making them the first known non-mammal species to communicate with infectious laughter.",
    "Long before rap battles, there was ‘flyting’: the exchange of witty, insulting verses. The verbal throwdowns were popular in England and Scotland from the 5th to 16th centuries.",
    "Melbourne gave some of its trees email addresses so residents could report problems. Instead, the trees received love letters.",
    "An estimated 1 million dogs in the U.S. have been named primary beneficiary in their owners' wills.",
    "At Petrified Forest National Park, visitors sometimes break the rules (and the law) by taking rocks home with them. According to rangers, they often end up returning the stolen goods in the mail—along with an apology note.",
    "The Russians showed up 12 days late to the 1908 Olympics in London because they were using the Julian calendar instead of the Gregorian calendar.",
    "Maya Angelou was the first black female streetcar conductor in San Francisco.",
    "In Japan, letting a sumo wrestler make your baby cry is considered good luck.",
    "J.K. Simmons has been the voice of the Yellow Peanut M&M since the late 1990s.",
    "Count von Count's love of numbers isn't just a quirky character trait—in traditional vampire folklore, the bloodsuckers have arithmomania, a compulsion to count.",
    "In Great Britain and Japan, black cats are perceived as auspicious. In the English Midlands, new brides are given black cats to bless their marriage, and the Japanese believe that black cats are good luck—particularly for single women.",
    "Portland was named by a coin flip. Had the coin landed the other way, the city would be Boston, Oregon.",
    "During World War I, a Canadian soldier made a black bear his pet and named her Winnipeg. “Winnie” was later a resident of the London Zoological Gardens where she was an adored attraction, especially to a boy named Christopher Robin, son of author A.A. Milne. The boy even named his teddy bear after her.",
    "Sleep literally cleans your brain. During slumber, more cerebrospinal fluid flushes through the brain to wash away harmful proteins and toxins that build up during the day.",
    "Neil Armstrong's astronaut application arrived a week past the deadline. A friend slipped the tardy form in with the others.",
    "Due to the restaurant's reputation for staying open in extreme weather, the so-called “Waffle House Index” is informally used by FEMA to gauge storm severity.",
    "The first sales pitch for the Nerf ball was “Nerf: You can’t hurt babies or old people!”",
    "The manchineel tree is nicknamed the ‘Tree of Death’ for good reason: Touching it can leave chemical burns on your skin, its fruit is toxic, and its bark—when burned—can cause blindness.",
    "If drivers adhere to the 45 mph speed limit on a stretch of Route 66 in New Mexico, the road's rumble strips will play a rendition of ‘America the Beautiful.’",
    "Russian cosmonauts used to pack a shotgun in case they landed in Siberia and had to fend off bears.",
    "Space has a distinct smell: a bouquet of diesel fumes, gunpowder, and barbecue. The aroma is mostly produced by dying stars.",
    "Before settling on the Seven Dwarfs we know today, Disney considered Chesty, Tubby, Burpy, Deafy, Hickey, Wheezy, and Awful.",
    "The annual number of worldwide shark bites is 10 times less than the number of people bitten by other people in New York.",
    "In 1997 a Louisville woman left actor Charles Bronson all of her money in a handwritten will—a total of about $300,000. She'd never met him; she was just a fan.",
    "Carly Simon's dad is the Simon of Simon and Schuster. He co-founded the company.",
    "Ben & Jerry learned how to make ice cream by taking a $5 correspondence course offered by Penn State. (They decided to split one course.)",
    "After an online vote in 2011, Toyota announced that the official plural of Prius was Prii.",
    "At the 1905 wedding of Franklin and Eleanor Roosevelt, President Teddy Roosevelt gave away the bride.",
    "Tootsie Rolls were added to soldiers' rations in World War II for their durability in all weather conditions.",
    "When Canada's Northwest Territories considered renaming itself in the 1990s, one name that gained support was ‘Bob.’",
    "After OutKast sang ‘Shake it like a Polaroid picture,’ Polaroid released a statement: ‘Shaking or waving can actually damage the image.’",
    "Marie Curie remains the only person to earn Nobel prizes in two different sciences.",
    "The Starry Night depicts Vincent van Gogh's view from the Saint-Paul de Mausole asylum.",
    "The ampersand symbol is formed from the letters in et—the Latin word for ‘and.’",
    "Army ants that misinterpret the scent trails left by other ants will sometimes break from the crowd and march in circles. If enough ants join, they can form massive ‘death spirals.’",
    "A solar eclipse helped end a six-year war in 585 BCE. When the sky suddenly darkened during a battle between the Lydians and the Medes in modern Turkey, soldiers took it as a sign to cease fighting.",
    "Wendy's founder Dave Thomas dropped out of high school but earned his GED in 1993. His GED class voted him Most Likely to Succeed.",
    "Both John Adams and Thomas Jefferson died on July 4, 1826—exactly 50 years after the adoption of the Declaration of Independence.",
    "Dogs are capable of understanding up to 250 words and gestures. The average dog is as intelligent as a two-year-old child.",
    "Bubbles keep your bath water warmer longer.",
    "Scientists have found evidence of take-out restaurants in the remains of Pompeii.",
    "Fried chicken was brought to America by Scottish immigrants.",
    "Peter Durand patented the tin can in 1810. Ezra Warner patented a can opener in 1858. In between, people used chisels and hammers.",
    "There are 71 streets in Atlanta with ‘Peachtree’ in their name.",
    "Goats have rectangular pupils.",
    "The bend in a flamingo's leg isn't a knee—it's an ankle.",
    "In 1946, Boston owner Walter Brown chose the nickname Celtics over Whirlwinds, Olympians, and Unicorns.",
    "After It's the Great Pumpkin, Charlie Brown aired, Charles Schulz was overwhelmed with candy shipments sent from kids who were concerned for Charlie, who got rocks instead of treats in his Halloween sack.",
    "One of the world's largest stockpiles of nuclear weapons—a U.S. Navy base near Seattle—is partially defended by trained dolphins.",
    "It's illegal for supermarkets in France to waste food. Supermarkets must either compost it or donate unsold or nearly expired goods to charity.",
    "Fredric Baur invented the Pringles can. When he passed away in 2008, his ashes were buried in one.",
    "A new baby can cost new parents 750 hours of sleep in the first year.",
    "In 1965, a Senate subcommittee predicted that by 2000, Americans would only be working 20 hours a week with seven weeks vacation.",
    "For one day in 1998, Topeka, Kansas, renamed itself ‘ToPikachu’ to mark Pokemon's U.S. debut.",
    "Truman Capote said he was the only person who'd met John F. Kennedy, Bobby Kennedy, Lee Harvey Oswald, and Sirhan Sirhan.",
    "Susan B. Anthony was fined $100 for voting in the 1872 election. She never paid the fine.",
    "Canned pumpkin isn't actually pumpkin. Even purees that advertise as ‘100 percent pumpkin’ are actually made of a range of different winter squashes.",
    "When Gene Wilder accepted the role of Willy Wonka, he had one condition: In his first appearance, Wilder wanted Wonka to limp toward the crowd with a cane in hand before falling into a perfect somersault and jumping back up. The reason? “Because from that time on, no one will know if I’m lying or telling the truth.”",
    "Dr. Seuss said he expected to spend ‘a week or so’ writing The Cat in the Hat. It actually took a year and a half.",
    "The Reese in Reese's Peanut Butter Cups is Harry Burnett Reese, a former Hershey employee who created his famous candy in the 1920s.",
    "The plural of cul-de-sac is culs-de-sac.",
    "Apollo 17 astronaut Harrison Schmitt was allergic to moon dust.",
    "At the Gettysburg reunion in 1913, two men purchased a hatchet, walked to the site where their regiments had fought, and buried it.",
    "‘Bloodcurdling’ isn't just an expression: Research shows that watching horror movies can increase a certain clotting protein in our bloodstreams.",
    "An episode of Peppa Pig was pulled from Australian television for teaching children not to fear spiders.",
    "A group of pugs is called a grumble.",
    "Before he wrote Goosebumps, R.L. Stine wrote the jokes for Bazooka Joe wrappers.",
    "In 1998, the U.S. Army tried developing a telepathic ray gun ‘where words could be transmitted to be heard like the spoken word, except that it could only be heard within a person’s head.’",
    "In 1967, the Nigerian Civil War ground to a halt for two days because both sides wanted to watch Pelé play in an exhibition soccer match.",
    "Winston Churchill's mother was born in Brooklyn.",
    "Jim Cummings is the voice of Winnie the Pooh. He calls sick kids in hospitals and chats with them in character.",
    "Before Google launched Gmail, ‘G-Mail’ was the name of a free email service offered by Garfield's website.",
    "Before the Nazis invaded Paris, H.A. and Margret Rey fled on bicycles. They were carrying the manuscript for Curious George.",
    "In colonial America, lobster wasn't exactly a delicacy. It was so cheap and plentiful it was often served to prisoners.",
    "Crayola means ‘oily chalk.’ The name combines craie (French for ‘chalk’) and ola (short for ‘oleaginous,’ or ‘oily’).",
    "Truman Show Delusion is a mental condition marked by a patient's belief that he or she is the star of an imaginary reality show.",
    "Cookie Monster is not changing his name. In a 2012 episode he said, ‘We've got to stop this Veggie Monster rumor before me reputation ruined.’",
    "Google's founders were willing to sell to Excite for under $1 million in 1999—but Excite turned them down.",
    "The medical term for ice cream headaches is sphenopalatine ganglioneuralgia.",

]


var notfact = [
    "The first bird to ever use an Xbox controller was a Kea called Parau.",
    "The gold in Tutankhamun’s tomb had been stolen from the tombs of other pharaohs.",
    "England’s biggest horticultural export is the fig.",
    "The same molecule that makes chicken taste like chicken can also be found in ground up oyster shells.",
    "Prince Phillip is widely credited with the invention of the party popper.",
    "Thyme is technically a tree.",
    "By definition a snake’s body is a limb.",
    "The roller coaster was invented during the Hundred Years’ War as a way of launching supplies across rivers.",
    "The toenail of your little toe is called the ‘spungle’.",
    "Courgette is actually the feminine noun of cucumber.",
    "The first video ever uploaded to Youtube had to be taken down in 2016 for violating their Terms of Service.",
    "There is a nerveless area of skin half the size of a playing card on the top of your foot. Your brain compensates for it.",
    "The biggest arms manufacturer in the world is Hasbro.",
    "By weight, bay leaves contain more caffeine than coffee beans. They are used to make a stimulating tea in Morocco.",
    "Vikings never fired flaming arrows at boats carrying the dead. They would sink them by running them over with a larger boat.",
    "There is a ‘Buzzy Bee’ still at the top of Mt Everest, left there by Edmund Hillary.",
    "Originally the Fonz was going to wear a leather vest but the popularity of the Village People made them switch to a jacket.",
    "Johnny Cash once got into a fist fight with Colonel Sanders over a sports game.",
    "There are more submarines in lakes right now than there are in the oceans.",
    "Gold nuggets were named after chicken nuggets – not the other way around.",
    "Buzz Aldrin left a pen on the moon after the first visit. Eugene Cernan, the last moon walker, found it. It still worked.",
    "There is a pattern on the inside of your upper eyelid that is as unique as your fingerprint.",
    "At least two unconnected cultures have used sparrow skulls as a form of currency.",
    "The President of Senegal was one of the scientists who developed the Large Hadron Collider.",
    "The kneecap is the roundest part of your body.",
    "The Nobel Prize for Physics has been awarded to a scientist who proved that a tree falling in the woods really does make a sound.",
    "JRR Tolkien refused to let his books be read out loud to people until after his death, preferring to keep his words ‘on the page’.",
    "Paris Hilton and Nicole Richie’s ‘The Simple Life’ is one of the most syndicated TV shows in the world.",
    "All fossils found in Canada belong to the Queen.",
    "The first sunglasses were actually animal skin scraped so thin that it became transparent.",
    "Sun Tzu’s ‘The Art of War’ is a sequel. The first book is lost forever.",
    "One of the gems on the Crown Jewels is a marble glued there by Edward the Confessor’s son.",
    "Researchers in the Antarctic will use apply whitening toothpaste to their drills when boring into the ice shelf.",
    "Due to the inclusion of certain metal isotopes in its construction, the standard trombone is actually radioactive.",
    "‘Bat Out of Hell’ was written by Meatloaf after an argument with Ozzy Osborne.",
    "The word ‘Loanshark’ was originally, ‘Loans, hark’.",
    "Jellified red wine was used as a lubricant by the ancient Greeks.",
    "One of the rings of Saturn is almost pure silver dust.",
    "Every member of Iron Maiden was a Quaker.",
    "The national anthem of Lithuania is palindromic. It plays backwards exactly the same way that it plays forwards.",
    "In Brazil they call Brazil nuts ‘Argentines’.",
    "The first pair of scissors was left-handed.",
    "The @ symbol was invented by Charles de Gaulle.",
    "Every member of The Baha Men is dead.",
    "A furlong was defined as the distance a mule can run in two minutes.",
    "The Eiffel Tower has bumps along its ‘legs’ that spell the French national motto in braille.",
    "The phrase, ‘If pain persists, see your doctor’ has been copyrighted by Bayer.",
    "Venetian blinds were invented in Venice.",
    "Cat Stevens first name is Catherine.",
    "The first copy of the Oxford English dictionary is missing the word ‘dictionary’.",
    "New Zealanders use more toilet paper per capita than any other country.",
    "Otters have been known to coat stones with fish scales to lure in birds.",
    "The largest sushi roll ever made would be impossible to transport through the Channel Tunnel.",
    "Morris dancing was invented by a guy called Morris.",
    "95% of people are pronouncing the name of the band ‘Live’ incorrectly.",
    "X-rays cannot pass through Velcro.",
    "The Boy Scouts were counted as part of the American military until 1986.",
    "Once a year all of Wikipedia is printed off and placed in a vault in Norway.",
    "While Thomas Crapper didn’t invent the toilet, he was killed by one.",
    "A copy of Detective Comics #38 exists with an error that has Batman constantly refer to his sidekick as ‘Bobin’.",
    "The producers of the movie ‘Air Bud’ are currently suing Apple for copyright infringement.",
    "Genghis Khan brought dressage to Europe.",
    "Resene has a 100 year contract to provide paint for the Hoover Dam.",
    "Where’s Wally books are used in the entry exam for MI6.",
    "Bubbles have a seam.",
    "In Lesotho it is considered rude not to offer someone a bite of your food before you start eating.",
    "Dave Bautista has been the leader of an improv troupe for the past twenty years.",
    "The National Library of Singapore uses woven human hair for bookmarks to preserve the condition of the pages.",
    "Percy Bysshe Shelley’s ‘Prometheus Unbound’ contains the first use of the word ‘Whoops’.",
    "An adolescent owl is called a ‘novice’.",
    "On average, three people are injured every time an audience gives a standing ovation.",
    "Napoleon was ashamed of his nipples and refused to let anyone see them. Even during medical treatments.",
    "There are no synonyms for thesaurus.",
    "‘The Fellowship of the Ring’ is the most stolen book in the world.",
    "Peppermint can’t be smelt by guinea pigs.",
    "The Lego headquarters has had to be rebuilt three times due to shoddy construction.",
    "MRI scans of cat brains have revealed that they see humans as a prey species.",
    "The lowest tone that can be hit by a specific tuba is called the ‘crass’.",
    "The ‘Peter Piper Procession’ is a yearly contest wherein participants compete to say the ‘Peter Piper’ tongue twister the fastest.",
    "Examination of recently discovered texts indicates that the Hittites first invented the slinky.",
    "Today more messages are sent using carrier pigeons than are sent via fax.",
    "The banjoist from the ‘Duelling Banjos; scene of Deliverance was offered a record deal. It reached number 15 on the Billboard charts.",
    "According to the International Federation of Poker, socks don’t count as an item of clothing in strip poker.",
    "The Geneva Convention’s prohibition of improper use of distinctive emblems during warfare also applies to the Jolly Roger.",
    "Every screw used in the construction of Vatican City has a cross on the head. They must never be upside down.",
    "The shoes of King Edward IV were weighted with lead to make his walk seem more imposing.",
    "During the breeding season, female cockroaches smell like pineapple.",
    "The music of the band ‘Rush’ has been featured in more video games than any other band or musician.",
    "Emeril Lagasse refused to ever use a spatula.",
    "Kevin Bacon founded an organisation that re-homes rescued factory farm pigs.",
    "Voltaire’s father was a cobbler.",
    "In American Football, touchdowns were originally called ‘tapstops’.",
    "The names of all missing persons in Honduras are kept in a register called ‘The Imponderables’.",
    "There exists a Sherlock Holmes story containing a kiss between Holmes and Watson but all copies are held by the Doyle estate.",
    "The founders of Johnson & Johnson were not related.",
    "A solid gold fidget spinner has been made, but it broke its first users index finger due to its weight.",
    "The longest game of mah-jong ever lasted for three years. It finished when the house it was being played in burned down.",
    "In Argentina, ‘Where in the World is Carmen San Diego’ is called, ‘In Pursuit of the Red Rebellious Bird’.",
    "Historical records indicate that the dairy cow’s moo used to be significantly louder than it currently is.",
    "Penguins have wavy feathers that produce a similar effect when moving through water as golf ball dimples do in the air.",

];

//end fact list