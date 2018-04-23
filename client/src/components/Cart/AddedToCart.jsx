import React from 'react';

const AddedToCart = (props) => {
  return (
    <div>
      <div class="modal fade" id="addedToCart" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content"> 
            <div class="modal-body">
              <h5 class="modal-title" id="exampleModalLabel">Added Sneakers to Cart</h5>
              <button type="button" class="modal-button" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddedToCart;