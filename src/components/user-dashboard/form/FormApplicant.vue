<template>
  <form>
    <div class="row my-2">
      <div class="col-sm-2 col-form-label">គោត្តនាម និងនាម</div>
      <div class="col-sm-4">
        <input type="email" class="form-control" />
      </div>

      <div class="col-sm-2 col-form-label">ភេទ</div>
      <div class="col-sm-4">
        <select class="form-select form-select-lg" id="inputGroupSelect01">
          <option selected>ជ្រើសរើសភេទ</option>
          <option value="1">ប្រុស</option>
          <option value="2">ស្រី</option>
        </select>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-sm-2 col-form-label">ថ្ងៃខែឆ្នាំកំណើត</div>
      <div class="col-sm-4">
        <input
          type="date"
          class="form-control"
          placeholder="dd-mm-yyyy"
          name="oldDob"
        />
      </div>

      <div class="col-sm-2 col-form-label">អាសយដ្ឋាន</div>
      <div class="col-sm-4">
        <input type="email" class="form-control" />
      </div>
    </div>
    <div class="row my-2">
      <div class="col-sm-2 col-form-label">សម័យប្រឡង</div>
      <div class="col-sm-4">
        <input
          type="date"
          class="form-control"
          placeholder="dd-mm-yyyy"
          name="oldDob"
        />
      </div>

      <div class="col-sm-2 col-form-label">មណ្ឌលប្រឡង</div>
      <div class="col-sm-4">
        <input type="email" class="form-control" />
      </div>
    </div>
    <div class="row my-2">
      <div class="col-sm-2 col-form-label">លេខបន្ទប់</div>
      <div class="col-sm-4">
        <input type="email" class="form-control" />
      </div>

      <div class="col-sm-2 col-form-label">លេខតុ</div>
      <div class="col-sm-4">
        <input type="email" class="form-control" />
      </div>
    </div>
    <div class="row my-2">
      <div class="col-sm-2 col-form-label">និន្ទេស</div>
      <div class="col-sm-4">
        <input type="email" class="form-control" />
      </div>

      <div class="col-sm-2 col-form-label">លេខទូរស័ព្ទ</div>
      <div class="col-sm-4">
        <input type="email" class="form-control" />
      </div>
    </div>
  </form>
</template>

<style scoped>
div,
input,
select {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
</style>