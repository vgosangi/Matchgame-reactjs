import './index.css'

const ImageItem = props => {
  const {imageDetails, selectedImage} = props
  const {id, thumbnailUrl} = imageDetails
  const onSelect = () => {
    selectedImage(id)
  }
  return (
    <>
      <li className="project-item-container">
        <button type="button" onClick={onSelect}>
          <img
            className="project-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </button>
      </li>
    </>
  )
}

export default ImageItem
