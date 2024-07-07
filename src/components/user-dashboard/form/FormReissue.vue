<template>
    <form>

        <div class="row">
            <table class="table-borderless">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">ស្នើកែ</th>
                        <th scope="col" class="text-center">ព័ត៌មាន</th>
                        <th scope="col" class="text-center">ក្នុងវញ្ញាបនបត្រចាស់</th>
                        <th scope="col" class="text-center">ក្នុងវិញ្ញាបនបត្រថ្មី</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" class="text-center">
                            <div class="form-check text-center">
                                <input type="checkbox" class="form-check-input" v-model="chkName" name="agree"
                                    id="chkName" />
                            </div>
                        </th>
                        <td class=" p-1">
                            <label class=""> ឈ្មោះសិស្ស</label>
                        </td>
                        <td class=" p-1">
                            <input type="text" class="form-control" name="oldName" v-model="oldName" />
                        </td>
                        <td class=" p-1">
                            <input type="text" class="form-control" name="newName" v-model="newName" />
                        </td>
                    </tr>
                    <!--========================== Gender ============ -->

                    <tr class="">
                        <th scope="row">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" v-model="chkGender" name="agree"
                                    id="agree" />
                            </div>
                        </th>
                        <td class=" p-1">
                            <label class=""> ភេទ</label>
                        </td>
                        <td class=" p-1">
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>ជ្រើសរើសភេទ</option>
                                <option value="1">ប្រុស</option>
                                <option value="2">ស្រី</option>
                            </select>
                        </td>
                        <td class=" p-1">
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>ជ្រើសរើសភេទ</option>
                                <option value="1">ប្រុស</option>
                                <option value="2">ស្រី</option>
                            </select>
                        </td>
                    </tr>
                    <!--========================== Gender ============ -->
                    <!-- ----------------------------------Date Of Birth -->
                    <tr>
                        <th scope="row">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" v-model="chkDob" name="agree"
                                    id="agree" />
                            </div>
                        </th>
                        <td class=" p-1">
                            <label class=""> ថ្ងៃខែឆ្នាំកំណើត</label>
                        </td>
                        <td class=" p-1">
                            <input type="date" class="form-control" placeholder="dd-mm-yyyy" name="oldDob"
                                v-model="oldDob">
                        </td>
                        <td class=" p-1">
                            <input type="date" placeholder="dd-mm-yyyy" class="form-control" name="newDob"
                                v-model="newDob">
                        </td>
                    </tr>
                    <!-- ===================Place of Birth ============ -->
                    <tr>
                        <th scope="row">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="agree" id="agree"
                                    v-model="chkPob" />
                            </div>
                        </th>
                        <td class=" p-1">
                            <label class=""> ទីកន្លែងកំណើត</label>
                        </td>

                        <td class=" p-1">
                            <input type="text" class="form-control" name="oldDob" v-model="oldPob">
                        </td>
                        <td class=" p-1">
                            <input type="text" class="form-control" name="newDob" v-model="newPob">
                        </td>
                    </tr>
                    <!-- ======================end place of birth================== -->
                    <!-- ============================Father name=================== -->
                    <tr>
                        <th scope="row">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="agree" id="agree"
                                    v-model="chkfather" />
                            </div>
                        </th>
                        <td class=" p-1">
                            <label class=""> ឈ្មោះឪពុក</label>
                        </td>
                        <td class=" p-1">
                            <input type="text" class="form-control" name="oldDob" v-model="oldFather">
                        </td>
                        <td class=" p-1">
                            <input type="text" class="form-control" name="newDob" v-model="newFather">
                        </td>
                    </tr>
                    <!-- ===================End Father ========================================= -->
                    <!-- =====================Mother Name ==================== -->
                    <tr>
                        <th scope="row">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="agree" id="agree"
                                    v-model="chkMother" />
                            </div>
                        </th>
                        <td class="p-0">
                            <label class=""> ឈ្មោះម្ដាយ</label>
                        </td>
                        <td class=" p-1">
                            <input type="text" class="form-control" name="oldDob" v-model="oldMother">
                        </td>
                        <td class=" p-1">
                            <input type="text" class="form-control" name="newDob" v-model="newMother">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
</template>


<style>
table,
tr,
td,
th {
    font-family: "Kantumruy Pro", sans-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    color: #3074fd !important;
}
</style>