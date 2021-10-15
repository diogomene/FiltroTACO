const fs = require ('fs')
const oficialFoods = []
const rawdata = fs.readFileSync('foodList.json');
const food = JSON.parse(rawdata);
food.forEach(element => {
    if(element.attributes.lipid)
    if(Number(element.attributes.lipid.qty)>1 && !element.description.includes('cru')){ 
        const newFood ={
            nome: element.description,
            carboidrato: element.attributes.carbohydrate && !isNaN(element.attributes.carbohydrate.qty) ? element.attributes.carbohydrate.qty : 0,
            proteina: element.attributes.protein && !isNaN(element.attributes.protein.qty) ? element.attributes.protein.qty : 0,
            lipid: element.attributes.lipid && !isNaN(element.attributes.lipid.qty) ? element.attributes.lipid.qty : 0,
            kcal: element.attributes.energy && !isNaN(element.attributes.energy.kcal) ? element.attributes.energy.kcal : 0
        }
        console.log(newFood)
        oficialFoods.push(newFood)
    }
});

const jsonOficialFood = JSON.stringify(oficialFoods)
fs.writeFileSync('foods.json', jsonOficialFood)
