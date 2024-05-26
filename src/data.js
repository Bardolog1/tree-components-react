const storeData = [
  {
    id: "1",
    name: "Categories",
    children: [
      {
        id: "2",
        name: "Electronics",
        children: [
          {
            id: "3",
            name: "Mobile Phones",
            children: [
              {
                id: "4",
                name: "Smartphones",
                children: [
                  {
                    id: "5",
                    name: "Apple",
                    children: [
                      {
                        id: "6",
                        name: "iPhone 13"
                      }
                    ]
                  },
                  {
                    id: "7",
                    name: "Samsung",
                    children: [
                      {
                        id: "8",
                        name: "Galaxy S21"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "9",
            name: "Laptops",
            children: [
              {
                id: "10",
                name: "Gaming Laptops",
                children: [
                  {
                    id: "11",
                    name: "ASUS",
                    children: [
                      {
                        id: "12",
                        name: "ROG Zephyrus"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "13",
        name: "Clothing",
        children: [
          {
            id: "14",
            name: "Men",
            children: [
              {
                id: "15",
                name: "Shirts",
                children: [
                  {
                    id: "16",
                    name: "Casual Shirts"
                  },
                  {
                    id: "17",
                    name: "Formal Shirts"
                  }
                ]
              }
            ]
          },
          {
            id: "18",
            name: "Women",
            children: [
              {
                id: "19",
                name: "Dresses",
                children: [
                  {
                    id: "20",
                    name: "Evening Dresses"
                  },
                  {
                    id: "21",
                    name: "Summer Dresses"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "22",
        name: "Home & Kitchen",
        children: [
          {
            id: "23",
            name: "Kitchen Appliances",
            children: [
              {
                id: "24",
                name: "Refrigerators",
                children: [
                  {
                    id: "25",
                    name: "Double Door"
                  },
                  {
                    id: "26",
                    name: "Single Door"
                  }
                ]
              }
            ]
          },
          {
            id: "27",
            name: "Furniture",
            children: [
              {
                id: "28",
                name: "Living Room",
                children: [
                  {
                    id: "29",
                    name: "Sofas"
                  },
                  {
                    id: "30",
                    name: "Coffee Tables"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, storeData);
  });
}
