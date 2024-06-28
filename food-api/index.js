const express = require('express');
const app = express();
const port = 3080;
const cors=require("cors")


const foodProducts = [
    {
        id: 1,
        name: "Paneer Butter Masala",
        description: "A rich and creamy dish made with paneer in a buttery tomato sauce.",
        price: 250,
        imageUrl: "https://i.imgur.com/hO7QG76.jpg"
    },
    {
        id: 2,
        name: "Chicken Biryani",
        description: "A fragrant rice dish made with aromatic spices and tender pieces of chicken.",
        price: 300,
        imageUrl: "https://i.imgur.com/9ihJasA.jpg"
    },
    {
        id: 3,
        name: "Masala Dosa",
        description: "A crispy and savory South Indian pancake filled with spiced potato filling.",
        price: 150,
        imageUrl: "https://i.imgur.com/Kt2mj6c.jpg"
    },
    {
        id: 4,
        name: "Butter Chicken",
        description: "A popular North Indian dish made with chicken in a spiced tomato, butter, and cream sauce.",
        price: 350,
        imageUrl: "https://i.imgur.com/KG9PfzQ.jpg"
    },
    {
        id: 5,
        name: "Chole Bhature",
        description: "A spicy chickpea curry served with deep-fried bread.",
        price: 200,
        imageUrl: "https://i.imgur.com/cRZ8Z3U.jpg"
    },
    {
        id: 6,
        name: "Fish Curry",
        description: "A flavorful and spicy fish curry made with a variety of spices.",
        price: 400,
        imageUrl: "https://i.imgur.com/IAHvjDi.jpg"
    },
    {
        id: 7,
        name: "Rogan Josh",
        description: "A signature dish of Kashmiri cuisine, made with tender lamb cooked in a rich and aromatic gravy.",
        price: 450,
        imageUrl: "https://i.imgur.com/EQ4e5Jb.jpg"
    },
    {
        id: 8,
        name: "Pav Bhaji",
        description: "A spicy blend of vegetables cooked in butter and served with soft bread rolls.",
        price: 120,
        imageUrl: "https://i.imgur.com/KnkEVdG.jpg"
    },
    {
        id: 9,
        name: "Tandoori Chicken",
        description: "Chicken marinated in yogurt and spices, then grilled to perfection.",
        price: 320,
        imageUrl: "https://i.imgur.com/1Pbh6q8.jpg"
    },
    {
        id: 10,
        name: "Palak Paneer",
        description: "A vegetarian dish made with paneer in a thick paste made from puréed spinach.",
        price: 270,
        imageUrl: "https://i.imgur.com/pZ2nFq2.jpg"
    },
    {
        id: 11,
        name: "Dal Makhani",
        description: "A creamy and buttery lentil dish made with black lentils and kidney beans.",
        price: 180,
        imageUrl: "https://i.imgur.com/2DeW1UP.jpg"
    },
    {
        id: 12,
        name: "Aloo Paratha",
        description: "Indian bread stuffed with a spicy potato filling, served with yogurt and pickle.",
        price: 80,
        imageUrl: "https://i.imgur.com/v3RymjS.jpg"
    },
    {
        id: 13,
        name: "Mutton Curry",
        description: "A hearty and flavorful curry made with tender pieces of mutton.",
        price: 400,
        imageUrl: "https://i.imgur.com/HK7HUQe.jpg"
    },
    {
        id: 14,
        name: "Veg Pulao",
        description: "Aromatic basmati rice cooked with mixed vegetables and spices.",
        price: 150,
        imageUrl: "https://i.imgur.com/Ct8FqOP.jpg"
    },
    {
        id: 15,
        name: "Gulab Jamun",
        description: "Soft, deep-fried dumplings soaked in a sweet, aromatic syrup.",
        price: 100,
        imageUrl: "https://i.imgur.com/XhSBq4n.jpg"
    },
    {
        id: 16,
        name: "Rasam",
        description: "A spicy South Indian soup made with tamarind juice, tomato, and various spices.",
        price: 70,
        imageUrl: "https://i.imgur.com/MTjsJ20.jpg"
    },
    {
        id: 17,
        name: "Hyderabadi Biryani",
        description: "A flavorful and aromatic biryani made with basmati rice and marinated meat.",
        price: 350,
        imageUrl: "https://i.imgur.com/7hAqPG8.jpg"
    },
    {
        id: 18,
        name: "Dhokla",
        description: "A savory steamed cake made from fermented rice and chickpea batter.",
        price: 80,
        imageUrl: "https://i.imgur.com/KCvHK24.jpg"
    },
    {
        id: 19,
        name: "Malai Kofta",
        description: "Deep-fried vegetable balls in a rich and creamy tomato-based sauce.",
        price: 300,
        imageUrl: "https://i.imgur.com/tCGKjv2.jpg"
    },
    {
        id: 20,
        name: "Rasgulla",
        description: "Soft and spongy cheese balls soaked in sugar syrup.",
        price: 90,
        imageUrl: "https://i.imgur.com/2CgYpUy.jpg"
    },
    {
        id: 21,
        name: "Kadai Paneer",
        description: "Paneer cooked with bell peppers, tomatoes, and a blend of spices in a kadai.",
        price: 280,
        imageUrl: "https://i.imgur.com/IfBh0zF.jpg"
    },
    {
        id: 22,
        name: "Lamb Vindaloo",
        description: "A spicy and tangy dish made with marinated lamb cooked in a hot and sour gravy.",
        price: 420,
        imageUrl: "https://i.imgur.com/XkPoxWV.jpg"
    },
    {
        id: 23,
        name: "Samosa",
        description: "Deep-fried pastry filled with spiced potatoes, peas, and sometimes meat.",
        price: 40,
        imageUrl: "https://i.imgur.com/MReQ9Sb.jpg"
    },
    {
        id: 24,
        name: "Pani Puri",
        description: "A popular street food consisting of hollow puris filled with spicy water, tamarind chutney, and mashed potatoes.",
        price: 50,
        imageUrl: "https://i.imgur.com/9p8XHnV.jpg"
    },
    {
        id: 25,
        name: "Mango Lassi",
        description: "A refreshing yogurt-based drink blended with mango pulp.",
        price: 100,
        imageUrl: "https://i.imgur.com/nZXFPGY.jpg"
    },
    {
        id: 26,
        name: "Bhindi Masala",
        description: "Okra cooked with onions, tomatoes, and a blend of spices.",
        price: 200,
        imageUrl: "https://i.imgur.com/AtcDaM8.jpg"
    },
    {
        id: 27,
        name: "Chicken Tikka",
        description: "Chunks of chicken marinated in spices and grilled on skewers.",
        price: 350,
        imageUrl: "https://i.imgur.com/T0NRRO1.jpg"
    },
    {
        id: 28,
        name: "Rajma Chawal",
        description: "Red kidney beans cooked in a thick gravy, served with steamed rice.",
        price: 150,
        imageUrl: "https://i.imgur.com/5GOyq1A.jpg"
    },
    {
        id: 29,
        name: "Dosa",
        description: "A thin and crispy South Indian pancake made from fermented rice and lentil batter.",
        price: 120,
        imageUrl: "https://i.imgur.com/zGTU3tW.jpg"
    },
    {
        id: 30,
        name: "Baingan Bharta",
        description: "A smoky and spicy dish made with roasted eggplant and a blend of spices.",
        price: 180,
        imageUrl: "https://i.imgur.com/FmMl8gF.jpg"
    },
    // {
    //     id: 31,
    //     name: "Kheer",
    //     description: "A creamy rice pudding flavored with cardamom, saffron, and garnished with nuts.",
    //     price: 120,
    //     imageUrl: "https://i.imgur.com/1v2AqUe.jpg"
    // },
    // {
    //     id: 32,
    //     name: "Masala Chai",
    //     description: "A spiced tea made by brewing black tea with a mixture of aromatic spices and herbs.",
    //     price: 50,
    //     imageUrl: "https://i.imgur.com/dcPvPSb.jpg"
    // },
    // {
    //     id: 33,
    //     name: "Bhatura",
    //     description: "A fluffy, deep-fried bread typically served with chole (spicy chickpea curry).",
    //     price: 60,
    //     imageUrl: "https://i.imgur.com/sox2sdE.jpg"
    // },
    // {
    //     id: 34,
    //     name: "Mango Pickle",
    //     description: "A tangy and spicy pickle made from raw mangoes and a blend of spices.",
    //     price: 60,
    //     imageUrl: "https://i.imgur.com/WvWYsWN.jpg"
    // },
    // {
    //     id: 35,
    //     name: "Shrikhand",
    //     description: "A traditional Indian dessert made from strained yogurt flavored with cardamom and saffron.",
    //     price: 150,
    //     imageUrl: "https://i.imgur.com/tsBbFvX.jpg"
    // },
    // {
    //     id: 36,
    //     name: "Papdi Chaat",
    //     description: "A popular Indian street food made with crispy dough wafers, boiled potatoes, chickpeas, yogurt, and chutneys.",
    //     price: 90,
    //     imageUrl: "https://i.imgur.com/yFCk39a.jpg"
    // },
    // {
    //     id: 37,
    //     name: "Mutton Biryani",
    //     description: "A fragrant and flavorful rice dish made with basmati rice and tender pieces of mutton.",
    //     price: 380,
    //     imageUrl: "https://i.imgur.com/6ktPiDF.jpg"
    // },
    // {
    //     id: 38,
    //     name: "Chana Masala",
    //     description: "A hearty and spicy chickpea curry made with tomatoes and a blend of spices.",
    //     price: 170,
    //     imageUrl: "https://i.imgur.com/BSbUBJh.jpg"
    // },
    // {
    //     id: 39,
    //     name: "Jalebi",
    //     description: "Sweet, spiral-shaped fritters soaked in sugar syrup.",
    //     price: 100,
    //     imageUrl: "https://i.imgur.com/3MDS9aI.jpg"
    // },
    // {
    //     id: 40,
    //     name: "Aloo Gobi",
    //     description: "A dry curry made with potatoes and cauliflower, cooked with spices.",
    //     price: 150,
    //     imageUrl: "https://i.imgur.com/ZXsqMUt.jpg"
    // },
    // {
    //     id: 41,
    //     name: "Kashmiri Pulao",
    //     description: "Aromatic rice cooked with saffron, dry fruits, and a blend of spices.",
    //     price: 250,
    //     imageUrl: "https://i.imgur.com/HNNj5q2.jpg"
    // },
    // {
    //     id: 42,
    //     name: "Chicken Korma",
    //     description: "Chicken cooked in a rich and creamy sauce made with yogurt and a blend of spices.",
    //     price: 350,
    //     imageUrl: "https://i.imgur.com/RVHgFZP.jpg"
    // },
    // {
    //     id: 43,
    //     name: "Sambar",
    //     description: "A lentil-based vegetable stew cooked with tamarind broth and a variety of vegetables.",
    //     price: 80,
    //     imageUrl: "https://i.imgur.com/6bbf6Nj.jpg"
    // },
    // {
    //     id: 44,
    //     name: "Shahi Paneer",
    //     description: "Paneer cooked in a rich and creamy tomato-based sauce with a blend of spices.",
    //     price: 320,
    //     imageUrl: "https://i.imgur.com/8o3GnY2.jpg"
    // },
    // {
    //     id: 45,
    //     name: "Raita",
    //     description: "A cooling side dish made with yogurt and mixed vegetables or fruits.",
    //     price: 50,
    //     imageUrl: "https://i.imgur.com/BVGO67F.jpg"
    // },
    // {
    //     id: 46,
    //     name: "Prawn Curry",
    //     description: "A flavorful and spicy prawn curry made with a variety of spices.",
    //     price: 420,
    //     imageUrl: "https://i.imgur.com/wT7MGXk.jpg"
    // },
    // {
    //     id: 47,
    //     name: "Vada Pav",
    //     description: "A popular street food from Mumbai, consisting of a spicy potato fritter in a bread bun.",
    //     price: 40,
    //     imageUrl: "https://i.imgur.com/R1Hc9I8.jpg"
    // },
    // {
    //     id: 48,
    //     name: "Rava Idli",
    //     description: "A steamed cake made from semolina and yogurt, spiced with mustard seeds and curry leaves.",
    //     price: 60,
    //     imageUrl: "https://i.imgur.com/6QOMsb7.jpg"
    // },
    // {
    //     id: 49,
    //     name: "Gajar Ka Halwa",
    //     description: "A traditional Indian dessert made with grated carrots, milk, sugar, and ghee.",
    //     price: 120,
    //     imageUrl: "https://i.imgur.com/M1OSdFx.jpg"
    // },
    // {
    //     id: 50,
    //     name: "Paneer Tikka",
    //     description: "Chunks of paneer marinated in spices and grilled on skewers.",
    //     price: 300,
    //     imageUrl: "https://i.imgur.com/gCKPsp1.jpg"
    // }
];
app.use(express.json())
app.use(cors())

app.get('/food', (req, res) => {
    try{
        console.log("Inside req")
        res.json(foodProducts);
    }
    catch(err){
        console.log(err)
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
