<template>
  <div>
    <table>
      <thead>
        <tr>
          <th colspan="0"></th>
          <th colspan="2">ID</th>
          <th colspan="2">Password</th>
          <th colspan="2">Email</th>
          <th colspan="2">Role</th>
          <th colspan="2">Skills</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user._id">
          <td colspan="1">{{index}}</td>
          <td colspan="2">{{user._id}}</td>
          <td colspan="2">{{user.password}}</td>
          <td colspan="2">{{user.email}}</td>
          <td colspan="2">{{user.role}}</td>
          <td colspan="2">{{user.skills.toString()}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios';
let apiURL = 'http://localhost:4000/api';

export default {
  /*  setup ()
   {
 
     console.log( "userModel", userModel );
     return {
 
     };
   } */
  props: {
    updateTable: {
      type: Boolean,
      default: false
    },
  },
  data ()
  {
    return {
      users: []
    };
  },
  watch: {
    updateTable: function ( newVal, oldVal )
    {
      console.log( "newVal, oldVal", newVal, oldVal );
      this.users = this.getUsers();
    }
  },
  mounted ()
  {
    axios.get( apiURL )
      .then( ( { data } ) => 
      {
        this.users = data;
      } );
  },

  methods: {
    getUsers ()
    {
      if ( this.updateTable )
      {
        axios.get( apiURL )
          .then( ( { data } ) =>
          {
            this.users = data;
          } );
      }
    }
  },
};
</script>

<style   scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border-width: 1px;
  border-style: solid;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}

td, th {
  border-width: 1px;
  border-style: solid;
}

thead,
tbody { 
  border-width: 1px;
  border-style: solid;
  text-align: left;
}
</style>