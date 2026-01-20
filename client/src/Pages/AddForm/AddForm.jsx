import React from "react";
import styles from "./AddForm.module.css";

function AddProductForm() {
  return (
    <div className={styles.wrapper}>
      <div
        className={`card shadow mx-auto ${styles.card}`}
        style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h3 className={`text-center mb-2 ${styles.title}`}>Add iPhone</h3>

          {/* Section Title */}
          <h5 className={styles.sectionTitle}>Product Details</h5>

          <form id="addProductForm">
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="product_name"
                  className={`form-control ${styles.input}`}
                  placeholder="Product Name"
                  required
                />
              </div>

              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="product_url"
                  className={`form-control ${styles.input}`}
                  placeholder="Product URL"
                  required
                />
              </div>
            </div>

            <h5 className={`${styles.sectionTitle} mt-2`}>Description</h5>
            <textarea
              name="product_brief_description"
              className={`form-control mb-2 ${styles.textarea}`}
              rows="1"
              placeholder="Brief Description"
              required></textarea>

            <textarea
              name="product_description"
              className={`form-control mb-2 ${styles.textarea}`}
              rows="2"
              placeholder="Full Description"
              required></textarea>

            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="product_img"
                  className={`form-control ${styles.input}`}
                  placeholder="Image URL"
                  required
                />
              </div>

              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="product_link"
                  className={`form-control ${styles.input}`}
                  placeholder="Product Link"
                  required
                />
              </div>
            </div>

            <h5 className={`${styles.sectionTitle} mt-2`}>Pricing</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="starting_price"
                  className={`form-control ${styles.input}`}
                  placeholder="Starting Price"
                  required
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="price_range"
                  className={`form-control ${styles.input}`}
                  placeholder="Price Range"
                  required
                />
              </div>
            </div>

            <h5 className={`${styles.sectionTitle} mt-2`}>User Info</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  type="text"
                  name="user_name"
                  className={`form-control ${styles.input}`}
                  placeholder="User Name"
                  required
                />
              </div>
              <div className="col-md-6 mb-2">
                <input
                  type="password"
                  name="user_password"
                  className={`form-control ${styles.input}`}
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <div className="text-center mt-2">
              <button
                type="submit"
                className={`btn btn-primary px-4 ${styles.button}`}>
                Add Product
              </button>
            </div>

            <p id="status" className={`text-center mt-3 ${styles.success}`}></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
