import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Adminmaster from '../../adminlayout/adminMaster'
import httpServices from '../../httpServises'

const Category = () => {
  const router = useRouter()
  const initialState = {
    slug: '',
    name: '',
    parent_id: '',
    status: ''
  }
  const [categories, setCategories] = useState()
  const [categoryStorage, setCategoryStorage] = useState(initialState)
  const [error, setError] = useState(initialState)
  const [selectedIDs, setSelectedIDs] = useState()
  const changeHandle = (e) => {
    const { name, value } = e.target
    setCategoryStorage({ ...categoryStorage, [name]: value })
    console.log(e.target.value)
    setError({ ...error, [name]: "" })

  }
  useEffect(() => {
    httpServices.getCategory().then((resp) => {
      if (resp.status == 1) {
        setCategories(resp.rdata.category)
      }
    })
  }, [])
  // useEffect(() => {
  //   props.get_category(categoryStorage.slug)
  // })
  //for multiple checkbox
  // const handleChange = (e) => {
  //   const checked = e.target.checked
  //   if (checked) {
  //     setSelectedIDs([...selectedIDs, e.target.value])
  //   } else {
  //     setSelectedIDs(selectedIDs.filter((id) => id !== e.target.value))
  //   }
  // }

  const handleChange = (e) => {
    const checked = e.target.checked
    if (checked) {
      setSelectedIDs(checked)
    } else {
      setSelectedIDs(false)
    }
  }
  const message = {
    emptySlug: "Please Enter Slug",
    emptyName: "Please Enter Name"
  }
  let validate;
  const validationHandle = () => {
    if (categories !== undefined) {
      categories.map((item) => {
        if (item.slug == categoryStorage.slug) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 700,
            timerProgressBar: true,
          })

          Toast.fire({
            icon: 'error',
            title: "Not Valid Slug"
          })
          validate = 1
        }
      })
    }
  }
  const submitHandle = (e) => {
    let slug;
    let name;
    e.preventDefault()
    if (categoryStorage.slug == "" || categoryStorage.name == "") {
      if (categoryStorage.slug == "") {
        slug = message.emptySlug
      }
      if (categoryStorage.name == "") {
        name = message.emptyName
      }
      setError({
        slug: slug,
        name: name
      })
      return false
    }
    const categoryData = {
      slug: categoryStorage.slug,
      name: categoryStorage.name,
      parent_id: categoryStorage.parent_id !== '' ? categoryStorage.parent_id : 0,
      status: selectedIDs == true ? 0 : 1,
    }
    validationHandle()
    if (validate != 1) {
      httpServices.addCategory(categoryData).then((resp) => {
        if (resp.status == 1) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 700,
            timerProgressBar: true,
          })

          Toast.fire({
            icon: 'success',
            title: resp.message
          })
        }
        // router.push('/admin/dashbord')
      })
    }
  }
  return (
    <Adminmaster>

      <section className="section">
        <div className="row">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-10">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Category Form</h5>
                <form>
                  <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Category Slug</label>
                    <div className="col-sm-10">
                      <input type="text" name='slug' onBlur={validationHandle} placeholder="Enter Category Slug" onChange={changeHandle} value={categoryStorage.slug} className="form-control" id="inputText" />
                      <span style={{ color: "red", fontSize: "15px" }}>{error.slug}</span>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Category Name</label>
                    <div className="col-sm-10">
                      <input type="text" name='name' value={categoryStorage.name}
                        onChange={changeHandle} placeholder="Enter Category Name" className="form-control" />
                      <span style={{ color: "red", fontSize: "15px" }}>{error.name}</span>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Categories:</label>
                    <div className="col-sm-10">
                      <select id="inputState" onChange={changeHandle} value={categoryStorage.parent_id} className="form-select" name='parent_id'>
                        <option defaultValue>Main Categories</option>
                        {categories !== undefined && categories.map((item) => {
                          return (
                            <option value={item.id} key={item.id}>{item.name}</option>
                          )
                        })
                        }
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                      <div className="form-check">
                        <input className="form-check-input" onChange={handleChange} name='status' type="checkbox" />
                        <label className="form-check-label" htmlFor="gridCheck1">
                          Status(Checked-Hidden)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button type="submit" onClick={submitHandle} className="btn btn-primary">Submit</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
          <div className="col-lg-1">
          </div>
        </div>

      </section>


    </Adminmaster >
  )
}


export default Category