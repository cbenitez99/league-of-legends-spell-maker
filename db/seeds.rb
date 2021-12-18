puts "Seeding summoners..."
Summoner.create!([
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    },
    {
        name: "",
        bio: ""
    }
]),
puts "Seeding summoner spells..."
Spell.create!([
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    },
    {
        name: "",
        description: "",
    }
]),
puts "Giving spells to summoners"
Summoner.all.each do |summoner|
    rand(1..5).times do
      spell = Spell.find(Spell.pluck(:id).sample)
  
      SummonerSpell.create!(summoner_id: summoner.id, spell_id: spell.id, cooldown: rand(1..160) + " seconds")
    end
end
