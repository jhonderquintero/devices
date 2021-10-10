
import sys
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

classification = {
  0: 'cardboard',
  1: 'metal',
  2: 'paper',
  3: 'plastic',
}

def load_image(path, resize=(300, 300)):
  """
    Load an image, from a path, to a tensor, intended to be used as a shorthand
    to load image for the Keras model.
  """
  assert path is not None
  img = image.load_img(path=path, target_size=resize)
  img_array = image.img_to_array(img)

  # Expand the dimensionality of the image to math the keras model
  # (1, height, width, channels) = (batch_size, height, width, channels)
  final_array = np.expand_dims(img_array, axis=0)
  return final_array

def get_classification(model, image):
  """
    Return the clasification of the image, as a string.
  """
  prediction = model.predict(image)
  max_value = np.max(prediction)
  max_index = np.where(prediction == max_value)
  prediction = max_index[1][0]

  return classification[prediction]


if __name__ == "__main__":
  image_path = None

  print(sys.argv)
  for arg in sys.argv:
    if(arg.startswith('--image_path=')):
      # Parse sensor from all the possible params passed
      image_path = arg.split('--image_path=')[1]
  
  print(image_path)
  assert image_path is not None

  model = load_model("NNModel.h5")
  image = load_image(image_path)

  final_classification = get_classification(model, image)

  print(format('--classification={0}'.format(final_classification)))
