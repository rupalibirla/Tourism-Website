import React from 'react'
import'./Adminhome.css'
const AdminHome = () => {
  return (
    <>
        <div className="App">
      <h1>tourDetailes</h1>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>city</th>
            <th>distance</th>
            <th>price</th>
            <th>maximum group size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TAJMAHAL</td>
            <td>Agra</td>
            <td>300</td>
            <td>5000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>KEDHARNATH</td>
            <td>RUDHRAPRAYAG</td>
            <td>400</td>
            <td>12000</td>

            <td>12</td>
          </tr>
          <tr>
            <td>KULLU-MANALI</td>
            <td>MANALI</td>
            <td>500</td>
           
            <td>6000</td> <td>6</td>
          </tr>
          <tr>
            <td>JAISALMER</td>
            <td>BIKANER</td>
            <td>500</td>
            <td>8000</td>
            <td>8</td>
          </tr>
          <tr>
            <td>GOA</td>
            <td>GOA</td>
            <td>500</td>
            <td>19000</td>
            <td>12</td>
          </tr>
          <tr>
            <td>NAINITAL</td>
            <td>CITY OF LAKE</td>
            <td>600</td>
            <td>9000</td>
            <td>10</td>
          </tr>
          <tr>
            <td>SIKKIM</td>
            <td>SIKKIM</td>
            <td>100</td>
            <td>8000</td>
            <td>17</td>
          </tr>
        </tbody>
      </table>
    </div>
  

    <div className="App">
      <h1>BOOKING DETAILES</h1>
      <table>
        <thead>
          <tr>
            <th>TOURNAME</th>
            <th>FULL NAME</th>
            <th>GUEST SIZE</th>
            <th>MOBILE NO.</th>
            <th>userEmail</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KULLU MANALI</td>
            <td>HEMANT</td>
            <td>5</td>
            <td>9340901307</td>
            <td>gangwal@gmail.com</td>
          </tr>
          <tr>
            <td>KULLU MANALI</td>
            <td>VINAYAK</td>
            <td>3</td>
            <td>9753772454</td>
            <td>rupalib@gmail.com</td>
          </tr>
          <tr>
            <td>KEDHARNATH</td>
            <td>RUPALI</td>
            <td>2</td>
            <td>247985691</td>
            <td>rupalib@gmail.com</td>
          </tr>
          <tr>
            <td>TAJMAHAL</td>
            <td>SHIVANI</td>
            <td>1</td>
            <td>5478569848</td>
            <td>SHIVANI@GMAIL.COM</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <div className="App">
      <h1>USER DETAILES</h1>
      <table>
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hemant gangwal</td>
            <td>hemantkgangwal@gmail.com</td>
            
            <td>user</td>
          </tr>
          <tr>
            <td>hemant kumar gangwal</td>
            <td>hemantkumargangwal@gmail.com</td>
            <td>user</td>
            
          </tr>
          <tr>
            <td>rupalib</td>
            <td>rupalib@gmail.com</td>
            <td>user</td>
            
          </tr>
          <tr>
            <td>hemantk</td>
            <td>gangwal@gmail.com</td>
            <td>user</td>
           
          </tr>
          <tr>
            <td>hemant</td>
            <td>hemantg@gmail.com</td>
            <td>admin</td>
         
          </tr>
        </tbody>
      </table>
    </div>
    <div className="App">
      <h1>review</h1>
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>review text</th>
            <th>rating</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hemant</td>
            <td>hello eveybody</td>
            <td>5</td>
           
          </tr>
          <tr>
            <td>shivani</td>
            <td>wonderfull</td>
            <td>3</td>
            
          </tr>
          <tr>
            <td>rupali</td>
            <td>very good facility</td>
            <td>3</td>
          
          </tr>
          
          
        </tbody>
      </table>
    </div>
  
    </>
  )
}

export default AdminHome