
interface Category{
    id: number;
    title: string;
    image: string;
    link: string;
}

interface Sections{
    id: number;
    title: string;
    exploreLink: string;
    categories: Category[];
}

interface CardData{
    sections: Sections[];
}


export const data : CardData = {
  "sections": [
    {
      "id": 1,
      "title": "Revamp your home in style",
      "exploreLink": "/home-decor",
      "categories": [
        {
          "id": 101,
          "title": "Cushion covers, bedsheets & more",
          "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
          "link": "/home-decor/cushions"
        },
        {
          "id": 102,
          "title": "Figurines, vases & more",
          "image": "https://images.unsplash.com/photo-1616628182507-3f1dbd9b1b74",
          "link": "/home-decor/figurines"
        },
        {
          "id": 103,
          "title": "Home storage",
          "image": "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
          "link": "/home-decor/storage"
        },
        {
          "id": 104,
          "title": "Lighting solutions",
          "image": "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
          "link": "/home-decor/lighting"
        }
      ]
    },
    {
      "id": 2,
      "title": "Upgrade your workspace",
      "exploreLink": "/workspace",
      "categories": [
        {
          "id": 201,
          "title": "Office chairs",
          "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
          "link": "/workspace/chairs"
        },
        {
          "id": 202,
          "title": "Work desks",
          "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
          "link": "/workspace/desks"
        },
        {
          "id": 203,
          "title": "Desk organizers",
          "image": "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
          "link": "/workspace/organizers"
        },
        {
          "id": 204,
          "title": "Table lamps",
          "image": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
          "link": "/workspace/lamps"
        }
      ]
    },
    {
      "id": 3,
      "title": "Kitchen essentials",
      "exploreLink": "/kitchen",
      "categories": [
        {
          "id": 301,
          "title": "Cookware sets",
          "image": "https://images.unsplash.com/photo-1604908176997-4316d1a6b4a6",
          "link": "/kitchen/cookware"
        },
        {
          "id": 302,
          "title": "Storage containers",
          "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c",
          "link": "/kitchen/storage"
        },
        {
          "id": 303,
          "title": "Kitchen tools",
          "image": "https://images.unsplash.com/photo-1580910051074-3eb694886505",
          "link": "/kitchen/tools"
        },
        {
          "id": 304,
          "title": "Dinnerware",
          "image": "https://images.unsplash.com/photo-1604908177522-040b95c5a9d3",
          "link": "/kitchen/dinnerware"
        }
      ]
    },
    {
      "id": 4,
      "title": "Explore fashion trends",
      "exploreLink": "/fashion",
      "categories": [
        {
          "id": 401,
          "title": "Men's clothing",
          "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
          "link": "/fashion/men"
        },
        {
          "id": 402,
          "title": "Women's fashion",
          "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
          "link": "/fashion/women"
        },
        {
          "id": 403,
          "title": "Footwear",
          "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772",
          "link": "/fashion/footwear"
        },
        {
          "id": 404,
          "title": "Accessories",
          "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
          "link": "/fashion/accessories"
        }
      ]
    }
  ]
}
