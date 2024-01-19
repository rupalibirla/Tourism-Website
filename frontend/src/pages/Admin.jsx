import React from 'react'

const Admin = () => {
  return (
    <>
<h3>{{}}</h3>

<form action="/employee" method="POST" autocomplete="off">
    <input type="hidden" name="_id" value="{{employee._id}}"/>
    <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-control" name="fullName" placeholder="Full Name" value="{{employee.fullName}}"/>
        <div class="text-danger">
            {{}}</div>
    </div>
    <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" name="email" placeholder="Email" value="{{employee.email}}"/>
        <div class="text-danger">
            {{}}</div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label>Mobile</label>
            <input type="text" class="form-control" name="mobile" placeholder="Mobile" value="{{employee.mobile}}"/>
        </div>
        <div class="form-group col-md-6">
            <label>City</label>
            <input type="text" class="form-control" name="city" placeholder="City" value="{{employee.city}}"/>
        </div>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-info"><i class="fa fa-database"></i> Submit</button>
        <a class="btn btn-secondary" href="/employee/list"><i class="fa fa-list-alt"></i> View All</a>
    </div>
</form>

    </>
)}


export default Admin