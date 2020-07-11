import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ViewCharacter (props) {
const [char, setChar] = useState([]) 
const [armors, setArmor] = useState([])
const [weapons, setWeapons] = useState([]) 
const [skills, setSkills] = useState([]) 
const [inventory, setInventory] = useState([]) 

// char = [{ name: props.name, }]
// create_table "characters", force: :cascade do |t|
// t.bigint "user_id", null: false
// t.string "name"
// t.string "race"
// t.string "character_class"
// t.integer "level"
// t.integer "xp"
// t.string "alignment"

useEffect(() => {
  //set character info
  //set info
  getArmor();
  getWeapon();
  getSkills();
  getInventory();
}, [])

function getArmor () {
  axios.get(`/api/armor/${props.character_id}`)
  .then((res) => {
    setArmor(res.data)
  })
};

function getWeapon () {
  axios.get(`/api/weapons/${props.character_id}`)
  .then((res) => {
    setWeapons(res.data)
  })
};

function getSkills () {
  axios.get(`/api/skills/${props.character_id}`)
  .then((res) => {
    setSkills(res.data)
  })
};

function getInventory () {
  axios.get(`api/inventory/${props.character_id}`)
  .then((res) => {
    setInventory(res.data)
  })
};

return (
  <div>
  {armors.map(a => (<h1>{a.name}</h1>))}
  {weapons.map(a => (<h1>{a.name}</h1>))}
  {skills.map(a => (<h1>{a.strength}</h1>))}
  {inventory.map(a => (<h1>{a.name}</h1>))}
  
  </div>
)

}

export default ViewCharacter;