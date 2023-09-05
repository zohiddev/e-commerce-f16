import BrandsIcon from '../../assets/icons/brandsIcons/BrandsIcon'
import AppleIcon from '../../assets/icons/brandsIcons/ApplebrandIcon'
import { brands } from '../../data/brands'
function Brands() {
  return (
    <div className='brands container'>
      <div className="brands_titles">
        <h1 className="brands_title">Brendlar</h1>
        <a href="https://olcha.uz/oz/manufacturer" className='brands_a'>{`barchasini ko'rish`}<BrandsIcon/></a>
      </div>
      <div className="brands__products">
        {
            brands.map((item)=>(

                <div className="brands__product">
                {
                    item.brand.map( (item) => (
                        <div className="brands_container">
                        <div className="brands_container_top">
                            <div className='brands_container_logo'><img src={item.img} alt="img" /> </div>
                            <div  className='brands_a'><a href='/'>{item.a} <BrandsIcon/></a></div>
                        </div>
                        <div className="brands_container_bottom">
                        {
                            item.containerBottom.map((item)=>(
                                
                                <div className="brands_container_bottom_container" key={item.id}>
                        <div className="brands_container_bottom_imgs"><img src={item.img} alt="img" />
                        </div>
                        <div className="brands_container_bottom_writing"><a href="/">{item.writing}</a></div>
                    </div>
            ))
        }
                </div>
        </div>
                    ))
                }
        </div> 
 
    ))
}
    </div>
    </div>
  )
}

export default Brands
