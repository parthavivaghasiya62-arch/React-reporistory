import Link from "next/link";
import React, { useEffect, useState } from "react";
import Adminmaster from "../../adminlayout/adminMaster";
import httpServices from "../../httpServises";

const viewCategory = () => {
  const [categories, setCategories] = useState()
  useEffect(() => {
    httpServices.getCategory().then((response) => {
      setCategories(response.data.category)
    })
  }, [])
  const deleteHandle = (id) => {
    httpServices.deleteCategory(id).then((response) => {
      setCategories(response.data.category)
    })
  }
  console.log(categories)
  return (
    <div>
      <Adminmaster>
        <div className="card mt-4">
          <div className="card-header">
            <h4>
              Product List
              <Link
                href="/admin/addproduct"
                className="btn btn-primary btn-sm float-end"
              >
                Add Product
              </Link>
            </h4>
          </div>
          <div className="card-body">
            <table
              id="example"
              className="table table-light responsive"
            >
              <thead>
                <tr>
                  <th className="all">No</th>
                  <th className="all">Sub No</th>
                  <th className="all">Category Slug</th>
                  <th className="all">Category Name</th>
                  <th className="all">Parent Category Name</th>
                  <th className="all">Edit</th>
                  <th className="all">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  (
                    categories !== undefined &&
                    categories.map((item, index) => {

                      return (
                        <>
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td></td>
                            <td>{item.slug} </td>
                            <td>{item.name}</td>
                            <td>___________</td>
                            <td>
                              <Link
                                href={`/admin/editCategory/${item.id}`}
                                className="btn btn-success btn-sm"
                              >
                                Edit
                              </Link>
                            </td>
                            <td>
                              <Link
                                href={`/admin/deleteCategory/${item.id}`}
                                className="btn btn-primary btn-sm"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>

                          {item.children.map((item2, index) => (
                            <tr>
                              {/* <td>{item2.id}</td> */}
                              <td></td>
                              <td>{index + 1}</td>
                              <td>{item2.slug}</td>
                              <td>{item2.name}</td>
                              <td>{item.id == item2.parent_id ? item.name : ''}</td>
                              <td>
                                <Link
                                  href={`/admin/editCategory/${item2.id}`}
                                  className="btn btn-secondary btn-sm"
                                >
                                  Edit
                                </Link>
                              </td>
                              <td>

                                <button className="btn btn-danger btn-sm" onClick={() => deleteHandle(item2.id)}>Delete</button>
                              </td>
                            </tr>
                          ))

                          }

                        </>

                      );
                    }))
                }
              </tbody>
            </table>
          </div>
        </div>
      </Adminmaster>
    </div>
  );
};

export default viewCategory;