




const ContainerPhoto = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color:  rgb(53, 133, 139, 0.2); 
	padding: 20px;
`
const UploadContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 30px;

`

const ImgHolder = styled.div`
    margin: auto;
    width: 300px;
    height: 250px;
	  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0 30px;

`
const ImageUpload = styled.label`
    color: white;
    border-radius: 20px;
    background-color: #072227;
    text-align: center;
    cursor: pointer;
  	display: flex;
    flex-direction: column;
	  justify-content: center;
  	align-items: center;
    padding: 10px;
`
const UploadLabel = styled.div`
    display: flex;
    justify-content: center;
    
`
const Img = styled.img`
	width: 300px;
    height: 250px;
    object-fit: cover;
`


const Input = styled.input.attrs({
  type: 'file',
})`

	display: none;
  `

const WrapperPhoto = styled.div``



const ProfilePhotoUpload = () => {
  const [productPicture, setProductPicture] = useState('');
  const [currentImg, setCurrentImg] = useState(ProductPlaceHolder);

  const imageHandler = (e) => {

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setCurrentImg(reader.result)
        setProductPicture(e.target.files[0])
      }
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <ContainerPhoto>
      <UploadContainer>
        <div>
          <ImgHolder>
            <Img src={currentImg} alt="" id="img" className="img" />
          </ImgHolder>
          <Input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />

        </div>

        <WrapperPhoto>
          <UploadLabel >
            <ImageUpload htmlFor="input" >
              <h4>Choose Your Product Photo</h4>	<CameraAltIcon sx={{ margin: "5px", fontSize: 30 }} /></ImageUpload>
          </UploadLabel>

        </WrapperPhoto>
      </UploadContainer>

    </ContainerPhoto>
  );
}

export default ProfilePhotoUpload;