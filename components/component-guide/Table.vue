<template>
  <div class="flex-1 mb-4">
    <h3 class="font-bold text-2xl mb-2">Table:</h3>
    <div class="w-full overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Crimson</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex items-center justify-center mt-4">
      <div class="btn-group">
        <button class="btn">Previous</button>
        <button class="btn">1</button>
        <button class="btn btn-active">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
        <button class="btn">Next</button>
      </div>
    </div>
  </div>
</template>
