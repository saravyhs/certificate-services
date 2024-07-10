<template>
  <!-- <form> -->
  <div class="row table-responsive">
    <!-- <div class="container text-center table-responsive"> -->
    <table class="table-borderless">
      <thead>
        <tr>
          <th scope="col" class="text-center">ស្នើកែ</th>
          <th scope="col" class="text-center">ព័ត៌មាន</th>
          <th scope="col" class="text-center">ក្នុងវិញ្ញាបនបត្រចាស់</th>
          <th scope="col" class="text-center">ក្នុងវិញ្ញាបនបត្រថ្មី</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="chkName"
              name="agree"
              id="chkName"
            />
          </td>
          <td class="p-1">
            <span> ឈ្មោះសិស្ស</span>
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="oldName"
              v-model="oldName"
            />
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="newName"
              v-model="newName"
            />
          </td>
        </tr>
        <!--========================== Gender ============ -->

        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="chkGender"
              name="agree"
              id="agree"
            />
          </td>
          <td class="p-1">
            <span class=""> ភេទ</span>
          </td>
          <td class="p-1">
            <select class="form-select form-select-lg" id="inputGroupSelect01">
              <option selected>ជ្រើសរើសភេទ</option>
              <option value="1">ប្រុស</option>
              <option value="2">ស្រី</option>
            </select>
          </td>
          <td class="p-1">
            <select class="form-select form-select-lg" id="inputGroupSelect01">
              <option selected>ជ្រើសរើសភេទ</option>
              <option value="1">ប្រុស</option>
              <option value="2">ស្រី</option>
            </select>
          </td>
        </tr>
        <!--========================== Gender ============ -->
        <!-- ----------------------------------Date Of Birth -->
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="chkDob"
              name="agree"
              id="agree"
            />
          </td>
          <td class="p-1">
            <span class=""> ថ្ងៃខែឆ្នាំកំណើត</span>
          </td>
          <td class="p-1">
            <input
              type="date"
              class="form-control"
              placeholder="dd-mm-yyyy"
              name="oldDob"
              v-model="oldDob"
            />
          </td>
          <td class="p-1">
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              class="form-control"
              name="newDob"
              v-model="newDob"
            />
          </td>
        </tr>
        <!-- ===================Place of Birth ============ -->
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              name="agree"
              id="agree"
              v-model="chkPob"
            />
          </td>
          <td class="p-1">
            <span class=""> ទីកន្លែងកំណើត</span>
          </td>

          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="oldDob"
              v-model="oldPob"
            />
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="newDob"
              v-model="newPob"
            />
          </td>
        </tr>
        <!-- ======================end place of birth================== -->
        <!-- ============================Father name=================== -->
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              name="agree"
              id="agree"
              v-model="chkfather"
            />
          </td>
          <td class="p-1">
            <span class=""> ឈ្មោះឪពុក</span>
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="oldDob"
              v-model="oldFather"
            />
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="newDob"
              v-model="newFather"
            />
          </td>
        </tr>
        <!-- ===================End Father ========================================= -->
        <!-- =====================Mother Name ==================== -->
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              name="agree"
              id="agree"
              v-model="chkMother"
            />
          </td>
          <td class="p-1">
            <span class=""> ឈ្មោះម្ដាយ</span>
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="oldDob"
              v-model="oldMother"
            />
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="newDob"
              v-model="newMother"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- </div> -->
  </div>
  <!-- </form> -->
</template>


<style scoped>
table,
tr,
td,
th,
input,
select {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
</style>