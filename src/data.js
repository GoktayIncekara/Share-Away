export const sliderItems = [
    {
      id: 1,
      img: "https://thumbs.dreamstime.com/b/giveaway-calligraphy-sign-graffiti-style-vintage-vector-illustration-ad-promotion-contest-image-win-gift-share-repos-130230502.jpg",
      title: "SHARE AWAY, Don't Throw Away",
      desc: "What you don't need anymore might be what someone else is looking for",
      bg: "072227",
    },
    {
      id: 2,
      img: "https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Helping%20banner.jpg?itok=aawrQgB1",
      title: "HELP OTHERS",
      desc: "You can help others just by sharing away your unwanted items!",
      bg: "072227",
    },
    {
      id: 3,
      img: "https://image.shutterstock.com/image-vector/sport-fitness-equipment-gear-items-260nw-1145070740.jpg",
      title: "IT CAN BE ANYTHING",
      desc: "The item can be in any category, there is no restrictions!",
      bg: "072227",
    },
  ];

  export const categories = [
    {
      id: 1,
      img: "https://fastcdn.pro/FileGallery/sermehiranian.com/Posts/3360_SL%20CR.jpg",
      title: "Furniture",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/photos/handsome-man-shopping-for-new-clothes-in-store-picture-id1189091313?k=20&m=1189091313&s=612x612&w=0&h=8zBj4HJMAaCLzmRKfoHvfMueqa7FFPA3zHttnoFnp9Y=",
      title: "Men Clothing",
    },
    {
      id: 3,
      img: "https://media.gettyimages.com/photos/rear-view-of-a-woman-choosing-a-dress-in-a-clothing-store-picture-idstk319165rkn",
      title: "Women Clothing",
    },
    {
      id: 4,
      img: "https://newstextarea.com/wp-content/uploads/2022/02/Technology-will-strengthen-Turkeys-socio-economic-growth.jpg",
      title: "Technology",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpnQm-BkFz_rT0kyGEfRfdLkxcJULZvMCPQg&usqp=CAU",
      title: "Home",
    },
    {
      id: 6,
      img: "https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg",
      title: "Books",
    },
    {
      id: 7,
      img: "https://www.bellybelly.com.au/wp-content/uploads/2013/10/when-do-babies-start-talking.jpg",
      title: "Baby",
    },
    {
      id: 8,
      img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Fun._band.jpg",
      title: "Fun",
    },
    {
      id: 9,
      img: "https://airtech-hygiene.com/wp-content/uploads/2020/11/El-Yikama-Virus-463x348.jpg",
      title: "Hygiene",
    },
    {
      id: 10,
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/6693/production/_111995262_gettyimages-1139930327.jpg",
      title: "School",
    },
    {
      id: 11,
      img: "https://i.hurimg.com/i/hdn/75/0x0/5d9c3c16c9de3d2218fa45f3.jpeg",
      title: "Elderly",
    },{
      id: 12,
      img: "https://www.gomeltourist.com/wp-content/uploads/2021/11/Travel.jpg",
      title: "Travel",
    },
  ];

  export const popularProducts = [
    {
      id:1,
      name:"T-shirt",
      imgArray:[{id:1, img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png", bg: "072227",}, {id:2, img: "https://cdn2.sorsware.com/addax/ContentImages/Product/2019-yaz-sezonu/ADX-0000020813/oversize-baskili-t-shirt-p9344-d5_adx-0000020813_fume-gri_2_buyuk.jpg", bg: "072227",}],
      desc: "Amazing",
      userId : 2,
      shipping: ["cargo", "pickup"],
      uploadDate : "02.05.2022"
    },
    {
      id:2,
      name:"Jacket",
      imgArray:[{id:1, img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",}, {id:2, img: "https://cdn2.sorsware.com/addax/ContentImages/Product/2019-yaz-sezonu/ADX-0000020813/oversize-baskili-t-shirt-p9344-d5_adx-0000020813_fume-gri_2_buyuk.jpg"}],
      desc: "Beautiful denim jumpsuit for daily usage.",
      userId : 1,
      shipping: ["cargo"],
      uploadDate : "02.05.2022"
    },
  ]
  export const users=[
    {id:1, name: "İlayda", surname: "Özel", email: "ilayda@gmail.com", phone:"015237722992", address:"123 Sk.", district:"Karabağlar", city: "İzmir", products:[{id:2}], profileImg:"https://media-exp1.licdn.com/dms/image/C5603AQGoynHIFGkwbw/profile-displayphoto-shrink_200_200/0/1647507719335?e=1654128000&v=beta&t=Fs0gSVDjMe580iK3f0LUkpCnZUXgMpqdJvlUTDWBsEA" },
    {id:2, name: "Göktay", surname: "Incekara", email: "goktay@gmail.com", phone:"0152322722", address:"11 Sk.", district:"Konak", city: "İzmir", products:[{id:1}], profileImg:"https://yt3.ggpht.com/ytc/AKedOLRmlQNJ5CK19qzQ4JUbG_0NkcFc32hWSJcekQMy=s900-c-k-c0x00ffffff-no-rj" }]