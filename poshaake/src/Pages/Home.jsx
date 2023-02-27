import React from 'react'
import Slider from 'react-slick';
import Explore from '../Components/Explore';
import Featured from '../Components/Featured';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Seasonal from '../Components/Seasonal';

function Home() {
 
    const SeasonalEssentials=[
        {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/37316_C_U_Q1_PFG_HP_VizNav_K-v2?aem_pjpeg",
            name:"Kid's"
        },
        {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/37316_C_U_Q1_PFG_HP_VizNav_FW?aem_pjpeg",
            name:"Footwear"
        },
        {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/37316_C_U_Q1_PFG_HP_VizNav_ACC?aem_pjpeg",
            name:"Accessories"
        },
        {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/37316_C_U_Q1_PFG_HP_VizNav_W?aem_pjpeg",
            name:"Women's"
        },
        {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/37316_C_U_Q1_PFG_HP_VizNav_M?aem_pjpeg",
            name:"Men's"
        }
    ];
   
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive:[
          {
            
            breakpoint: 1024,
            settings: {
              arrows: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
   



    const FeaturedFavorites=[

        {
          image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1917381_010_f?$x1_grid$&v=1676388993"
        },

        {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1799751_010_f?$x1_grid$&v=1676388993"
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1867041_695_b?$x1_grid$&v=1676388993"
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/WG6756_576_f?$x1_grid$&v=1676388993"
          }

      ];

      const setting1 = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive:[
          {
            
            breakpoint: 1024,
            setting1: {
              arrows: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            setting1: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            setting1: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const ExploreBestSellers=[

        {
          image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1982661_191_b?$x1_grid$&v=1676388993",
          des:"Women's Joy Peak™ Omni-Heat™ Infinity Mid Insulated Hooded Jacket",
          p1:89,
          p2:134,
          p3:180,
          rating:2,

        },

        {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1864562_858_b?$x1_grid$&v=1676388993",
            des:"Men's Lake 22 Down Hooded Jacket",
            p1: 131,
            p2: 149,
            p3: 220,
            rating:4.4,
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/2005031_255_f2?$x1_grid$&v=1676388993",
            des: "Men's Facet™ 45 OutDry™ Shoe",
            p1: 119,
            p2: 23,
            p3: 160,
            rating:3.7,
  
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1903401_089_f2?$x1_grid$&v=1676388993",
            des: "Men's Expeditionist™ Boot",
            p1: 111,
            p2:43,
            p3: 160,
            rating:4.1,
  
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1806711_716_b?$x1_grid$&v=1676388993",
            des: "Kids' Bugaboo™ II Insulated Ski Pants",
            p1: 44,
            p2: 55,
            p3: 75,
            rating:3,
  
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1945351_217_f2?$x1_grid$&v=1676388993",
            des: "Women's Keetley™ Shorty Boot",
            p1: 77,
            p2: 90,
            p3: 130,
            rating:2.2,
  
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1702881_010_f2?$x1_grid$&v=1676388993",
            des:"Women's Heavenly™ Omni-Heat™ Waterproof Boot",
            p1: 83,
            p2: 24,
            p3: 140,
            rating:1.1,
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1989251_713_b?$x1_grid$&v=1676388993",
            des:"Women's Delta Ridge™ Down Jacket",
            p1: 79,
            p2: 23,
            p3: 150,
            rating:3.3,
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1875921_572_b?$x1_grid$&v=1676388993",
            des:"Women's Hikebound™ Rain Jacket",
            p1: 39,
            p2: 59,
            p3: 80,
            rating: 1.1,
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1554171_203_f2?$x1_grid$&v=1676388993",
            des:"Women's Ice Maiden™ II Boot - Wide",
            p1: 76,
            p2: 99,
            p3: 110,
            rating:2.1,
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1875902_716_f?$x1_grid$&v=1676388993",
            des:"Men's Delta Ridge™ Down Jacket",
            p1: 74,
            p2: 111,
            p3: 150,
            rating:2.9,
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1553611_010_f2?$x1_grid$&v=1676388993",
            des:"Men's Redmond™ Waterproof Low Shoe",
            p1: 69,
            p2: 23,
            p3: 100,
            rating:2.3,
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1653761_505_f?$x1_grid$&v=1676388993",
            des:"Men's PFG Super Slack Tide™ Camp Shirt",
            p1: 27,
            p2: 32,
            p3: 55,
            rating:4.0,
          },
          
          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1917381_010_b?$x1_grid$&v=1676388993",
            des:"Men's Youngberg™ Insulated Jacket",
            p1: 200,
            p2: 23,
            p3: 120,
            rating:4.2,
          },

          {
            image:"https://columbia.scene7.com/is/image/ColumbiaSportswear2/1863431_011_b?$x1_grid$&v=1676388993",
            des:"Girls' Alpine Action™ II Jacket",
            p1: 30,
            p2: 20,
            p3: 10,
            rating:3.4,
          }

         
      ];
 

      const setting2 = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll:3,
        responsive:[
          {
            
            breakpoint: 1024,
            setting2: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            setting2: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            setting2: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='start'>
      <Navbar/>
       {/*................................. ..Starting .......................................................*/}

      <div className='don'>

      <div className='round'>
      <p>WINTER</p>
      <h1>SALE</h1>
     </div>
     <br />

     <div className='last'>
      <div className='chance'>
      <h1>LAST CHANCE</h1>
       <h1>UP TO 50% OFF</h1>
     </div>
      <br />
      <div className='gear'>
      <h3>SELECT GEAR</h3>
      </div>
      <div className='sale'>
      <button>SHOP WINTER SALE</button>
      </div>

     </div>
     </div>


    <div> 

      <div style={{border:"1px solid blue"}}></div>
          {/*.................................. Mid Portion.....................................................*/}
          <div className='sea'>
   <h1>Seasonal Essentials</h1>
    </div>
   <Slider {...settings}>
   
   {
    SeasonalEssentials.map((e)=>(
     <Seasonal

     image={e.image}
     name={e.name}
     
     />
    ))
   } 
   </Slider>
    </div>

    <div className='pic'>
      <div className='pic1'>
      <img src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/20590_C_U_X1_SU20_CGR_HP_Banner_Black_Logo_resized_@2x?$aem_png$" alt="kick" />
       <h1>Get Rewards On Every Purchase</h1>
       <p>Members get free shipping and rewards on every order.</p>
       <button>LOG IN & SHOP </button><span> <button>JOIN FOR FREE</button> </span>
       </div>
    </div>

    <div className='ekpic'>
      <img width="100%"src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/02-09_37315_Campaign_Mountain_v0_XL?$aem_pjpeg$" alt="baj" />
    </div>

    <div className='snow'>

     <h1>The Mountain Is Calling</h1>
     <p>Answer it in warm, waterproof, breathable gear.</p>
     <button>SHOP SKI & SNOW</button>

    </div>

{/*.................................. Mid 1 Portion.....................................................*/}

    <div>
    <div className='sea'>
    <h1>Featured Favorites</h1>
    </div>
  
  <Slider {...setting1}>


{
   FeaturedFavorites.map((e)=>(
  
  <Featured
  image={e.image}
 />
 ))
}
</Slider>
 </div>

 <div className='linker'>
    <div >

   <img width="90%"src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/1-26_37313_COL_US_Mountain_HP_Refresh-SH-02_LG?$aem_pjpeg$" alt="oskar" />
    <div className='minus'>
      <h2>STAY DAY</h2>
      <h4>Shop RainWater</h4>
    </div>
    </div>

    <div>

   <img width="90%" src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/02-09_37315_Youth_NA_v1_XL?$aem_pjpeg$" alt="oskar" />
    <div className='minus'>
      <h2>ADVENTURE AHEAD</h2>
      <h4>Shop's Kid New Arrivals</h4>
    </div>
    </div>
        </div>

    <div className='pk'>
      <h2>How Do You Play?</h2>
        
        <div className='shahid'>

        <div>
          <img src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/12-26_COL_US_WIN21_WINTERSALE_CONTINGENCY_SUPERCAT_viznav02_04_v2?$aem_pjpeg$" alt="" />
          <div className='fish'>
           <h2>FISHING</h2>
          </div>
        </div>
        <div>
        <img src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/03-01_27811_VizNav_Hiking_v0?$aem_pjpeg$" alt="" />
          <div className='fish'>
           <h2>HIKING</h2>
          </div>
        </div>
        <div>
        <img src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/09-01_29285_c_u_lukecombs_brand_hp_subhero_visnavactivity?$aem_pjpeg$" alt="" />
          <div className='fish'>
           <h2>HUNTING</h2>
          </div>
        </div>
        <div>
        <img src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/12-26_COL_US_WIN21_WINTERSALE_CONTINGENCY_SUPERCAT_viznav02_02?$aem_pjpeg$" alt="" />
          <div className='fish'>
           <h2>SKI & SNOW</h2>
          </div>
        </div>
        </div>

        <div className='nature'>
          <h1>"Nature. The world's largest playground."</h1>
          <h4>Gert Boyle</h4>
          <p>FOUNDER, COLUMBIA SPORTSWEAR</p>

        </div>





    </div>


 <div className='exp'>

  <h1> Explore Best Sellers</h1>

  <Slider {...setting2}>
    
    {
      ExploreBestSellers.map((e)=>(
         <Explore 
         image={ e.image}
          des={e.des}
          p1={e.p1}
          p2={e.p2}
          p3={e.p3}
         rating={e.rating} 
         />
          
      ))
    }

  </Slider>
 </div>

  <div className='moon'>
   
     <div className='oso'>
    <img width="100%" src="https://lmg-labmanager.s3.amazonaws.com/assets/articleNo/29120/aImg/52433/how-magnetism-could-help-explain-earth-s-formation-m.webp" alt="" />
    </div>
     <div className='moon1'>

      <div className='moon2'>
        <img width="100%"src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/LUNAR_TEST_CLOSER_VX?$aem_pjpeg$" alt="sd" />
        <h3>Go Further</h3>
        <p>Omni-Heat Infinity is heading to the Moon</p>
        <p>Learn More</p>
      </div>
      <div className='moon2'>
      <img width="100%"src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/01-27_27664_2021_Site_Closer_TMOG_v0?$aem_pjpeg$" alt="sd" />
        <h3>Tough Mother Outdoor Guide</h3>
        <p>A no-nonsense guide to the great outdoors.</p>
        <p>Explore</p>
      </div>
      <div className='moon2'>
      <img width="100%"src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/01-27_27664_2021_Site_Closer_Slide_Tech_v2?$aem_pjpeg$" alt="sd" />
        <h3>Technologies</h3>
        <p>Keeping you warm,dry,cool, & protected.</p>
        <p>Explore Our Tech</p>
      </div>
      <div className='moon2'>
      <img width="100%"src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/01-27_27664_Ambassador_Closer_Poster_v0?$aem_pjpeg$" alt="sd" />
        <h3>Ambassadors</h3>
        <p>Reach new heights with people who inspire.</p>
        <p>Meet Our ambassadors</p>
      </div>
     </div>
  </div>

  <div className='tele'>
   
   <div className='tele1'>
      
      <img width="20%"src="https://t3.ftcdn.net/jpg/04/89/27/48/240_F_489274878_2RzzoEd2hyIQwfESV33sFG6rW5kOe976.jpg" alt="" />
     <p>(800) 622-93453</p>
     <h4>Phone: 5am-8pm PT Mon-Fri, Closed Sat/Sun
Chat: 5am-8pm PT Sat/Sun, 4am-9pm PT Mon-Fri</h4>
    
   </div>

   <div className='tele1'>
   
   <img width="25%" src="https://i0.wp.com/detechter.com/wp-content/uploads/2013/08/31.png?resize=325%2C260&ssl=1" alt="" />
    <p>Customer Care</p>
   </div>

   <div className='tele1'>
    <img width="20%"src="https://thumbs.dreamstime.com/b/gift-card-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133760159.jpg" alt="" />
    <p>Gift Cards</p>
   </div>

   <div className='tele1'>
    <img width="20%"src="https://static.vecteezy.com/system/resources/thumbnails/000/552/683/small/location_pin_002.jpg" alt="" />
    <p>Find a Store</p>
   </div>



  </div>
  
<Footer/>
 </div>
     

  )
  
}

export default Home