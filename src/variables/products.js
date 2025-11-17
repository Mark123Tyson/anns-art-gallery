
const products = [
    { 
      id: 1, 
      image: "/images/2bottle-decors.jpg", 
      title: "Elegant Glass Bottle Decor", 
      description: "This elegant bottle decor piece adds a touch of sophistication to any room, handcrafted with intricate details.", 
      price: 29.99, 
      isAvailable: true, 
      category: "Decors & Bottles" 
    },
    { 
      id: 2, 
      image: "/images/3bottle-decors.jpg", 
      title: "Vintage Style Bottle Ornament", 
      description: "A stunning vintage bottle decor ornament, perfect for enhancing your home's rustic charm and style.", 
      price: 49.99, 
      isAvailable: false, 
      category: "Decors & Bottles" 
    },
    { 
      id: 3, 
      image: "/images/bead-bag-showcase.jpg", 
      title: "Handcrafted Beaded Bag", 
      description: "This intricately handcrafted beaded bag is perfect for fashion lovers who appreciate fine craftsmanship and style.", 
      price: 19.99, 
      isAvailable: true, 
      category: "Beads Collection" 
    },
    { 
      id: 4, 
      image: "/images/bead-bag-uganda-crane-hand-bag.jpg", 
      title: "Ugandan Crane Bead Handbag", 
      description: "A vibrant handbag featuring the Ugandan crane, carefully crafted with colorful beads for a cultural touch.", 
      price: 39.99, 
      isAvailable: true, 
      category: "Beads Collection" 
    },
    { 
      id: 5, 
      image: "/images/bead-bags-showcase.jpg", 
      title: "Ethnic Bead Showcase Bag", 
      description: "A stunning showcase bead bag designed to celebrate ethnic patterns, perfect for standing out with elegance.", 
      price: 59.99, 
      isAvailable: false, 
      category: "Beads Collection" 
    },
    { 
      id: 6, 
      image: "/images/bead-bags.jpg", 
      title: "Chic Bead Sling Bag", 
      description: "This chic bead sling bag is the ultimate accessory for casual yet fashionable outings, with a trendy design.", 
      price: 24.99, 
      isAvailable: true, 
      category: "Beads Collection" 
    },
    { 
      id: 7, 
      image: "/images/bead-bracelet.jpg", 
      title: "Beaded Elegance Bracelet", 
      description: "An elegant bracelet made from high-quality beads, designed to add a sophisticated touch to your jewelry collection.", 
      price: 34.99, 
      isAvailable: true, 
      category: "Jewellery" 
    },
    { 
      id: 8, 
      image: "/images/beadhandbag.jpg", 
      title: "Trendy Beaded Handbag", 
      description: "This trendy beaded handbag is perfect for those who love unique designs and high-quality craftsmanship.", 
      price: 44.99, 
      isAvailable: false, 
      category: "Beads Collection" 
    },
    { 
      id: 9, 
      image: "/images/beautiful-set.jpg", 
      title: "Deluxe Art Decor Set", 
      description: "A deluxe decor set that brings beauty and elegance to your living space with its artful design.", 
      price: 54.99, 
      isAvailable: true, 
      category: "Workshop & Showcase" 
    },
    { 
      id: 10, 
      image: "/images/black-green-tyre-table-stool-cushion-showcase.jpg", 
      title: "Eco-Friendly Tyre Stool", 
      description: "An eco-friendly stool made from recycled tyres, designed to add a sustainable touch to your home decor.", 
      price: 34.99, 
      isAvailable: true, 
      category: "workshop & Showcase" 
    },

      { 
        id: 11, 
        image: "/images/black-red-tyre-2-chair-stool.jpg", 
        title: "Red & Black Tyre Chair Set", 
        description: "A stylish and durable chair set made from recycled tyres, featuring a striking red and black color scheme.", 
        price: 15.99, 
        isAvailable: false, 
        category: "Tyre Tables & Seats" 
      },
      { 
        id: 12, 
        image: "/images/blue-pink-bottles.jpg", 
        title: "Blue & Pink Decorative Bottles", 
        description: "A charming set of blue and pink decorative bottles that add a splash of color to any space.", 
        price: 24.99, 
        isAvailable: true, 
        category: "Decors & Bottles" 
      },
      { 
        id: 13, 
        image: "/images/clay-art-pieces-pink-round.jpg", 
        title: "Round Clay Art Piece", 
        description: "A handcrafted round clay art piece that brings a touch of artistic elegance to your decor.", 
        price: 44.99, 
        isAvailable: true, 
        category: "Art Pieces" 
      },
      { 
        id: 14, 
        image: "/images/complete-tyre-pieces.jpg", 
        title: "Complete Tyre Furniture Set", 
        description: "A complete set of furniture made from upcycled tyres, offering eco-friendly seating and decor.", 
        price: 29.99, 
        isAvailable: true, 
        category: "Tyre Tables & Seats" 
      },
      { 
        id: 15, 
        image: "/images/decorbottles.jpg", 
        title: "Handcrafted Decor Bottles", 
        description: "These handcrafted decor bottles feature intricate designs and are perfect for enhancing any interior space.", 
        price: 64.99, 
        isAvailable: false, 
        category: "Decors & Bottles" 
      },
      { 
        id: 16, 
        image: "/images/decors.jpg", 
        title: "Artistic Woven Door Mat", 
        description: "An artistic and durable woven door mat, designed to bring a welcoming touch to your entryway.", 
        price: 49.99, 
        isAvailable: true, 
        category: "Door & Table Mats" 
      },
      { 
        id: 17, 
        image: "/images/door-mat.jpg", 
        title: "Eco-Friendly Tyre Door Mat", 
        description: "A sustainable door mat crafted from repurposed tyres, combining durability with eco-friendly design.", 
        price: 19.99, 
        isAvailable: true, 
        category: "Tyre Tables & Seats" 
      },
      { 
        id: 18, 
        image: "/images/double-glass-table.jpg", 
        title: "Double Glass Tyre Table", 
        description: "A contemporary double glass table crafted from recycled tyres, ideal for modern spaces.", 
        price: 34.99, 
        isAvailable: false, 
        category: "Tyre Tables & Seats" 
      },
      { 
        id: 19, 
        image: "/images/earings.jpg", 
        title: "Handmade Beaded Earrings", 
        description: "These elegant handmade beaded earrings are a perfect addition to any jewelry collection, offering a unique touch of style.", 
        price: 12.99, 
        isAvailable: true, 
        category: "Jewellery" 
      },
      { 
        id: 20, 
        image: "/images/full-set-table-mats-bottle.jpg", 
        title: "Decorative Table Mat & Bottle Set", 
        description: "A full set of decorative table mats paired with a stylish bottle, perfect for enhancing your dining experience.", 
        price: 18.99, 
        isAvailable: true, 
        category: "Workshop & Showcase" 
      },

        { 
          id: 21, 
          image: "/images/full-set-table-mats.jpg", 
          title: "Complete Table Mat Set", 
          description: "A beautifully designed full set of table mats, perfect for enhancing your dining space.", 
          price: 39.99, 
          isAvailable: true, 
          category: "Workshop & Showcase" 
        },
        { 
          id: 22, 
          image: "/images/ganja-bracelet.jpg", 
          title: "Ganja-Inspired Bracelet", 
          description: "A unique bracelet with a Ganja-inspired design, perfect for casual wear or as a statement piece.", 
          price: 22.99, 
          isAvailable: false, 
          category: "Jewellery" 
        },
        { 
          id: 23, 
          image: "/images/glass-top-table.jpg", 
          title: "Glass-Top Tyre Table", 
          description: "A sleek and modern tyre table with a glass top, ideal for both indoor and outdoor spaces.", 
          price: 44.99, 
          isAvailable: true, 
          category: "Tyre Tables & Seats" 
        },
        { 
          id: 24, 
          image: "/images/gold-mirror-bottle-decor.jpg", 
          title: "Gold Mirror Bottle Decor", 
          description: "An elegant decorative bottle with gold mirror accents, perfect for adding a luxurious touch to your decor.", 
          price: 54.99, 
          isAvailable: true, 
          category: "Decors & Bottles" 
        },
        { 
          id: 25, 
          image: "/images/gold-mirror-show.jpg", 
          title: "Gold Mirror Showcase Piece", 
          description: "A stunning showcase piece featuring a gold mirror design, adding sophistication to any room.", 
          price: 29.99, 
          isAvailable: true, 
          category: "Decors & Bottles" 
        },
        { 
          id: 26, 
          image: "/images/gold-purple-mirrors.jpg", 
          title: "Gold & Purple Mirror Set", 
          description: "A set of gold and purple mirrors that bring a regal touch to your living space.", 
          price: 24.99, 
          isAvailable: false, 
          category: "Decors & Bottles" 
        },
        { 
          id: 27, 
          image: "/images/golden-mirror.jpg", 
          title: "Golden Mirror Wall Decor", 
          description: "A luxurious golden mirror that makes a bold statement in any room, adding depth and elegance.", 
          price: 32.99, 
          isAvailable: true, 
          category: "Lampshades & Mirrors" 
        },
        { 
          id: 28, 
          image: "/images/golden-bottles.jpg", 
          title: "Golden Decorative Bottles", 
          description: "A stunning set of golden decorative bottles, perfect for adding a touch of glamour to any setting.", 
          price: 49.99, 
          isAvailable: true, 
          category: "Decors & Bottles" 
        },
        { 
          id: 29, 
          image: "/images/golden-green-tyre-stool-table-cushion.jpg", 
          title: "Golden & Green Tyre Stool Set", 
          description: "A unique tyre stool and table set featuring golden and green accents, perfect for both indoor and outdoor seating.", 
          price: 59.99, 
          isAvailable: true, 
          category: "Workshop & Showcase" 
        },
        { 
          id: 30, 
          image: "/images/golden-necklace-bracelet-earpieces.jpg", 
          title: "Golden Jewelry Set", 
          description: "A stunning golden jewelry set including a necklace, bracelet, and earrings, perfect for special occasions.", 
          price: 34.99, 
          isAvailable: true, 
          category: "Jewellery" 
        },      
    
          { 
            id: 31, 
            image: "/images/green-black-tyre-stool-cushion.jpg", 
            title: "Green & Black Tyre Stool with Cushion", 
            description: "A stylish green and black tyre stool with a cushion, perfect for both outdoor and indoor seating.", 
            price: 22.99, 
            isAvailable: false, 
            category: "Workshop & Showcase" 
          },
          { 
            id: 32, 
            image: "/images/green-glass-stool.jpg", 
            title: "Green Glass-Topped Stool", 
            description: "An elegant green glass-topped stool, ideal for enhancing your living space with a modern look.", 
            price: 19.99, 
            isAvailable: true, 
            category: "Tyre Tables & Seats" 
          },
          { 
            id: 33, 
            image: "/images/green-yellow-grey-lampshades.jpg", 
            title: "Green, Yellow & Grey Lampshade Set", 
            description: "A vibrant set of lampshades in green, yellow, and grey, adding a pop of color to any room.", 
            price: 54.99, 
            isAvailable: true, 
            category: "Lampshades & Mirrors" 
          },
          { 
            id: 34, 
            image: "/images/lampshade-doormat.jpg", 
            title: "Lampshade & Doormat Combo", 
            description: "A unique combination of a lampshade and a matching doormat, perfect for adding charm to your entrance.", 
            price: 44.99, 
            isAvailable: true, 
            category: "Lampshades & Mirrors" 
          },
          { 
            id: 35, 
            image: "/images/necklace-bracelet-earing-beads.jpg", 
            title: "Beaded Necklace, Bracelet & Earrings Set", 
            description: "A beautifully handcrafted beaded jewelry set, including a necklace, bracelet, and earrings.", 
            price: 29.99, 
            isAvailable: false, 
            category: "Jewellery" 
          },
          { 
            id: 36, 
            image: "/images/other-work-house-painting-workshop-part-time.jpg", 
            title: "Hand-Painted Lampshade", 
            description: "A unique, hand-painted lampshade created in a part-time workshop, perfect for adding a personal touch to your decor.", 
            price: 39.99, 
            isAvailable: true, 
            category: "Lampshades & Mirrors" 
          },
          { 
            id: 37, 
            image: "/images/pink-black-flower-lampshade.jpg", 
            title: "Pink & Black Floral Lampshade", 
            description: "A delicate pink and black lampshade with a floral pattern, perfect for soft lighting in any room.", 
            price: 24.99, 
            isAvailable: true, 
            category: "Lampshades & Mirrors" 
          },
          { 
            id: 38, 
            image: "/images/pink-lamp-shade.jpg", 
            title: "Classic Pink Lampshade", 
            description: "A classic pink lampshade that brings a subtle and calming touch to any space.", 
            price: 19.99, 
            isAvailable: true, 
            category: "Lampshades & Mirrors" 
          },
          { 
            id: 39, 
            image: "/images/production-stage-showcase-workshop.jpg", 
            title: "Production Stage Showcase Workshop", 
            description: "A detailed showcase of production stage items, ideal for display or educational workshops.", 
            price: 12.99, 
            isAvailable: false, 
            category: "Workshop & Showcase" 
          },
          { 
            id: 40, 
            image: "/images/purple-decor-bottles.jpg", 
            title: "Purple Decor Bottles", 
            description: "A set of elegant purple decor bottles, perfect for adding a sophisticated touch to your home or office.", 
            price: 74.99, 
            isAvailable: true, 
            category: "Decors & Bottles" 
          },        

            { 
              id: 41, 
              image: "/images/red-blue-greenish-earings-pieces.jpg", 
              title: "Red, Blue & Green Earring Pieces", 
              description: "A beautiful set of red, blue, and green earrings that add a pop of color to any outfit.", 
              price: 14.99, 
              isAvailable: true, 
              category: "Jewellery" 
            },
            { 
              id: 42, 
              image: "/images/red-blue-tyre-stool.jpg", 
              title: "Red & Blue Tyre Stool", 
              description: "A unique and vibrant tyre stool in red and blue, ideal for outdoor and indoor seating.", 
              price: 89.99, 
              isAvailable: true, 
              category: "Tyre Tables & Seats" 
            },
            { 
              id: 43, 
              image: "/images/red-cloth-necklaces.jpg", 
              title: "Red Cloth Necklace Set", 
              description: "A stylish and bold necklace set made from vibrant red cloth, perfect for a statement look.", 
              price: 24.99, 
              isAvailable: true, 
              category: "Jewellery" 
            },
            { 
              id: 44, 
              image: "/images/red-green-lampshade-and-stool.jpg", 
              title: "Red & Green Lampshade with Stool", 
              description: "A striking red and green lampshade paired with a matching stool, perfect for display.", 
              price: 29.99, 
              isAvailable: false, 
              category: "Workshop & Showcase" 
            },
            { 
              id: 45, 
              image: "/images/red-green-tyre-stool.jpg", 
              title: "Red & Green Tyre Stool", 
              description: "A durable and eco-friendly tyre stool in red and green, ideal for seating or as a decor piece.", 
              price: 39.99, 
              isAvailable: true, 
              category: "Tyre Tables & Seats" 
            },
            { 
              id: 46, 
              image: "/images/red-green-tyre-stools.jpg", 
              title: "Set of Red & Green Tyre Stools", 
              description: "A set of red and green tyre stools, great for outdoor gatherings or modern interior decor.", 
              price: 17.99, 
              isAvailable: true, 
              category: "Tyre Tables & Seats" 
            },
            { 
              id: 47, 
              image: "/images/red-lampshade.jpg", 
              title: "Classic Red Lampshade", 
              description: "A classic red lampshade that adds warmth and elegance to your living room or bedroom.", 
              price: 24.99, 
              isAvailable: true, 
              category: "Lampshades & Mirrors" 
            },
            { 
              id: 48, 
              image: "/images/red-lampshade1.jpg", 
              title: "Elegant Red Lampshade", 
              description: "An elegant red lampshade with a modern design, perfect for adding character to any room.", 
              price: 34.99, 
              isAvailable: false, 
              category: "Lampshades & Mirrors" 
            },
            { 
              id: 49, 
              image: "/images/red-yellow-tyre-stool-lampshade.png", 
              title: "Red & Yellow Tyre Stool with Lampshade", 
              description: "A vibrant combination of a red and yellow tyre stool paired with a matching lampshade.", 
              price: 59.99, 
              isAvailable: true, 
              category: "Tyre Tables & Seats" 
            },
            { 
              id: 50, 
              image: "/images/red-yellow-tyre-stool.jpg", 
              title: "Red & Yellow Tyre Stool", 
              description: "A compact red and yellow tyre stool, perfect for extra seating or as an accent piece.", 
              price: 9.99, 
              isAvailable: true, 
              category: "Tyre Tables & Seats" 
            },          
               
              { 
                id: 51, 
                image: "/images/red-decor-bottles.jpg", 
                title: "Red Decor Bottles Set", 
                description: "A charming set of red decorative bottles, perfect for adding a touch of elegance to any room.", 
                price: 49.99, 
                isAvailable: true, 
                category: "Decors & Bottles" 
              },
              { 
                id: 52, 
                image: "/images/revamped-black-shoes.jpg", 
                title: "Revamped Black Shoes", 
                description: "Stylish black shoes, beautifully revamped for a modern, trendy look.", 
                price: 69.99, 
                isAvailable: true, 
                category: "Revamped Shoes & Books" 
              },
              { 
                id: 53, 
                image: "/images/revamped-black-wooden-shoes-heels.jpg", 
                title: "Black Wooden Heels", 
                description: "Elegant black wooden heels, revamped for a unique and fashionable statement.", 
                price: 19.99, 
                isAvailable: false, 
                category: "Revamped Shoes & Books" 
              },
              { 
                id: 54, 
                image: "/images/revamped-book-bible.jpg", 
                title: "Revamped Bible Book", 
                description: "A creatively revamped Bible, perfect as a unique display piece or gift.", 
                price: 14.99, 
                isAvailable: true, 
                category: "Revamped Shoes & Books" 
              },
              { 
                id: 55, 
                image: "/images/revamped-hand-bag.jpg", 
                title: "Revamped Handbag", 
                description: "A beautiful handbag with a revamped, fashionable design, perfect for everyday use.", 
                price: 22.99, 
                isAvailable: true, 
                category: "Jewellery" 
              },
              { 
                id: 56, 
                image: "/images/revamped-shoes.jpg", 
                title: "Revamped Colorful Shoes", 
                description: "Colorful and trendy shoes, revamped for a modern and unique style.", 
                price: 19.99, 
                isAvailable: true, 
                category: "Revamped Shoes & Books" 
              },
              { 
                id: 57, 
                image: "/images/revamped-small-bag-case-kitenge.jpg", 
                title: "Revamped Kitenge Bag", 
                description: "A stylish small bag made from vibrant Kitenge fabric, perfect for special occasions.", 
                price: 44.99, 
                isAvailable: false, 
                category: "Jewellery" 
              },
              { 
                id: 58, 
                image: "/images/revamped-white-to-blue-shoes.jpg", 
                title: "White-to-Blue Revamped Shoes", 
                description: "Trendy revamped shoes transitioning from white to blue, perfect for a modern look.", 
                price: 34.99, 
                isAvailable: true, 
                category: "Revamped Shoes & Books" 
              },
              { 
                id: 59, 
                image: "/images/shoes-bracelet-earings.jpg", 
                title: "Shoes, Bracelet & Earrings Set", 
                description: "A fashionable set including shoes, a bracelet, and earrings, ideal for accessorizing.", 
                price: 24.99, 
                isAvailable: true, 
                category: "Jewellery" 
              },
              { 
                id: 60, 
                image: "/images/tyre-stool-showcase.jpg", 
                title: "Tyre Stool Showcase", 
                description: "A creative tyre stool, perfect for both seating and as a showcase piece.", 
                price: 9.99, 
                isAvailable: true, 
                category: "Tyre Tables & Seats" 
              },

                { 
                  id: 61, 
                  image: "/images/tyre-table-bottle-showcase.jpg", 
                  title: "Tyre Table Bottle Showcase", 
                  description: "A unique tyre table designed to showcase bottles creatively and stylishly.", 
                  price: 59.99, 
                  isAvailable: false, 
                  category: "Tyre Tables & Seats" 
                },
                { 
                  id: 62, 
                  image: "/images/wall-hanging.jpg", 
                  title: "Elegant Wall Hanging", 
                  description: "A beautiful and elegant wall hanging, perfect for adding a touch of style to your home.", 
                  price: 29.99, 
                  isAvailable: true, 
                  category: "Decors & Bottles" 
                },
                { 
                  id: 63, 
                  image: "/images/wall-hanging1.jpg", 
                  title: "Stylish Wall Hanging", 
                  description: "A stylish and modern wall hanging that enhances the ambiance of any room.", 
                  price: 24.99, 
                  isAvailable: true, 
                  category: "Decors & Bottles" 
                },
                { 
                  id: 64, 
                  image: "/images/wall-hangings-red-black-hexagon-showcase.jpg", 
                  title: "Red & Black Hexagon Showcase", 
                  description: "A striking red and black hexagon wall hanging, ideal for showcasing your decor.", 
                  price: 69.99, 
                  isAvailable: true, 
                  category: "Workshop & Showcase" 
                },
                { 
                  id: 65, 
                  image: "/images/whole-set-table-mats.jpg", 
                  title: "Whole Set of Table Mats", 
                  description: "A complete set of table mats, designed to protect and style your dining table.", 
                  price: 14.99, 
                  isAvailable: true, 
                  category: "Door & Table Mats" 
                },
                { 
                  id: 66, 
                  image: "/images/workshop-golden-tyre-table-stool.jpg", 
                  title: "Golden Tyre Table & Stool", 
                  description: "A stunning golden tyre table and stool set, perfect for a chic, modern look.", 
                  price: 19.99, 
                  isAvailable: false, 
                  category: "Tyre Tables & Seats" 
                },
                { 
                  id: 67, 
                  image: "/images/workshop-mirror-showcase.jpg", 
                  title: "Mirror Showcase", 
                  description: "A beautiful mirror showcase designed to elevate the style of any room.", 
                  price: 34.99, 
                  isAvailable: true, 
                  category: "Workshop & Showcase" 
                },
                { 
                  id: 68, 
                  image: "/images/workshop-tyre-kitenge-table-stools.jpg", 
                  title: "Kitenge Tyre Table & Stools", 
                  description: "A vibrant Kitenge tyre table and stool set, adding a cultural touch to your space.", 
                  price: 54.99, 
                  isAvailable: true, 
                  category: "Tyre Tables & Seats" 
                },
                { 
                  id: 69, 
                  image: "/images/workshop-tyre-stool-table-production.jpg", 
                  title: "Tyre Stool & Table Set", 
                  description: "A durable tyre stool and table set, designed for comfort and style.", 
                  price: 74.99, 
                  isAvailable: true, 
                  category: "Tyre Tables & Seats" 
                },
                { 
                  id: 70, 
                  image: "/images/workshop1.jpg", 
                  title: "Workshop Table Set", 
                  description: "A practical workshop table set, perfect for any creative workspace.", 
                  price: 29.99, 
                  isAvailable: true, 
                  category: "Workshop & Showcase" 
                },
                { 
                  id: 71, 
                  image: "/images/yellow-kitenge-table-mats.jpg", 
                  title: "Yellow Kitenge Table Mats", 
                  description: "A set of vibrant yellow Kitenge table mats, ideal for bringing color to your dining space.", 
                  price: 39.99, 
                  isAvailable: true, 
                  category: "Door & Table Mats" 
                },
                { 
                  id: 72, 
                  image: "/images/yellow-round-circle-table-mats.jpg", 
                  title: "Yellow Circular Table Mats", 
                  description: "A beautiful set of yellow circular table mats, adding a bright and stylish touch to your table.", 
                  price: 49.99, 
                  isAvailable: false, 
                  category: "Door & Table Mats" 
                },
                { 
                  id: 73, 
                  image: "/images/yellow-tyre-glass-stool.jpg", 
                  title: "Yellow Tyre Glass Stool", 
                  description: "A creative yellow tyre stool with a glass top, perfect as a stylish accent piece.", 
                  price: 59.99, 
                  isAvailable: true, 
                  category: "Tyre Tables & Seats" 
                }
              ];
              

export default products