
const API = 
{

UPDATE_USER_PROFILE: 
 {
    api: '/api/user/profile/:userid',
    method: 'PUT',
    param: 
    {
      firstname: 
      {
        required: true,
        type: 'string'
      },
      lastname: 
      {
        required: true,
        type: 'string'
      },
      phone: 
      {
        min_len: 10,
        max_len: 15,
        required: true,
        type: 'string'
      },
      gender: 
      {
        required: true,
        type: 'string'
      },     
      dateofbirth: 
      {
        //required: true,
        type: 'string'
      }
    }
  },

  GET_USER_PROFILE:
  {
    api: '/api/user/getprofile/:userid',
    method: 'GET',
    param:
    {
        userid:
        {
            required: true,
            type: 'string'
        }       
    }
  },

  INSERT_USER_PROFILE: {
    api: '/api/user/profile',
    method: 'POST',
    param: {
      firstname: {
        required: true,
        type: 'string'
      },
      lastname: {
        required: true,
        type: 'string'
      },
      phone: {
        min_len: 10,
        max_len: 15,
        required: true,
        type: 'string'
      },
      gender: {
        required: true,
        type: 'string'
      },
      dateofbirth: {
        required: true,
        type: 'string'
      }
    }
  }
 

};

module.exports = API;

