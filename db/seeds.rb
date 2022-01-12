
Champion.destroy_all
Ability.destroy_all
puts "creating user"
# user = User.create(username: "Cristian", password_digest: "1234")
puts "creating champion"
# champion = Champion.create(name: "Jinx", bio: "Absolutely bonkers, and has a thing against her sister, Vi.", image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg")
puts "creating ability"
# ability = Ability.create(name: "Get Hyper!", description: "Gain 50% bonus attack damage, and movement speed.", champion_id: 11, user_id: user.id)
# puts "Seeding champions..."

Champion.create([
    {
        name: "Aatrox",
        bio: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
        image: "https://www.pcgamesn.com/wp-content/uploads/legacy/aatrox_rework_2-590x332.jpg"
    },
    {
        name: "Blitzcrank",
        bio: "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg"
    },
    {
        name: "Caitlyn",
        bio: "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg"
    },
    {
        name: "Draven",
        bio: "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and his unparalleled skill with his spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat whomever he must to ensure that his name is chanted throughout the empire forever more.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg"
    },
    {
        name: "Ekko",
        bio: "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this freedom, when there's a threat to his friends he'll do anything to defend them. To outsiders, Ekko seems to achieve the impossible the first time, every time.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg"
    },
    {
        name: "Gwen",
        bio: "A former doll transformed and brought to life by magic, Gwen wields the very tools that once created her. She carries the weight of her maker's love with every step, taking nothing for granted. At her command is the Hallowed Mist, an ancient and protective magic that has blessed Gwen's scissors, needles, and sewing thread. So much is new to her, but Gwen remains joyfully determined to fight for the good that survives in a broken world.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg"
    },
    {
        name: "Illaoi",
        bio: "Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer of Nagakabouros” soon discover Illaoi never battles alone—the god of the Serpent Isles fights by her side.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg"
    },
    {
        name: "Jhin",
        bio: "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg"
    },
    {
        name: "Lee Sin",
        bio: "A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland against any who would dare upset its sacred balance. Enemies who underestimate his meditative demeanor will endure his fabled burning fists and blazing roundhouse kicks.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg"
    },
    {
        name: "Viego",
        bio: "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving wraith tortured by an obsessive longing for his centuries-dead queen, Viego now stands as the Ruined King, controlling the deadly Harrowings as he scours Runeterra for anything that might one day restore her, and destroying all in his path as the Black Mist pours endlessly from his cruel, broken heart.",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg"
    }
])
puts "Seeding abilities..."
Ability.create([
    {
        name: "WORLD ENDER",
        description: "Fear nearby enemy minions and gain attack damage, increased healing, and movement speed. Takedowns extend this effect.",
        champion_id: 1,
        user_id: 1
    },
    {
        name: "STATIC FIELD",
        description: "Enemies attacked are marked and take lightning damage after 1 second. Additionally, activate this ability to remove nearby enemies' shields, damage them, and silence them briefly.",
        champion_id: 2,
        user_id: 1
    },
    {
        name: "ACE IN THE HOLE",
        description: "Deal massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.",
        champion_id: 3,
        user_id: 1
    },
    {
        name: "WHIRLING DEATH",
        description: "Hurl two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns after striking an enemy champion. Activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction.",
        champion_id: 4,
        user_id: 1
    },
    {
        name: "CHRONOBREAK",
        description: "Become untargetable and rewind to a more favorable point in time. Return to whenever you were a few seconds ago, and heal for a percentage of the damage received in that duration. Enemies near the arrival zone take massive damage.",
        champion_id: 5,
        user_id: 1
    },
    {
        name: "NEEDLEWORK",
        description: "Hurls a needle that slows enemies hit, deals magic damage, and applies A Thousand Cuts to champions hit. This ability can be cast up to two more times, with each cast throwing additional needles and dealing more damage. Must hit an enemy between each cast to unlock the next one.",
        champion_id: 6,
        user_id: 1
    },
    {
        name: "LEAP OF FAITH",
        description: "Smashes a golden sphere into the ground, dealing physical damage to nearby enemies. A Sea-Tentacle spawns for each enemy champion hit.",
        champion_id: 7,
        user_id: 1
    },
    {
        name: "CURTAIN CALL",
        description: "Weapon transforms into a shoulder-mounted mega-cannon. It is able to fire 4 super shots at extreme range that pierce through minions and monsters, but stop on the first champion impacted. It cripples enemies hit, which slows them and deals execute damage. The 4th shot is perfectly crafted, epically powerful, and guaranteed to critically strike.",
        champion_id: 8,
        user_id: 1
    },
    {
        name: "DRAGON'S RAGE",
        description: "Performs a powerful roundhouse kick launching his target back, dealing physical damage to the target and any enemies they collide with. Enemies the target collides with are knocked into the air for a short duration. This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map.",
        champion_id: 9,
        user_id: 1
    },
    {
        name: "HEARTBREAKER",
        description: "Teleports to a nearby location and executes an enemy champion on arrival, piercing their heart and causing a destructive shockwave around them that knocks away their allies.",
        champion_id: 10,
        user_id: 1
    }
])
puts "Creating Default Profile..."
    
puts "Done!!!"


