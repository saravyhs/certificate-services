<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body p-sm-5 my-sm-5">
          <div class="d-lg-flex flex-lg-row justify-content-center gap-4">
            <div class="card flex-fill">
              <div class="card-body text-center">
                <div class="avatar avatar-xxl">
                  <img
                    src="@/assets/img/talha.jpg"
                    alt="..."
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="mt-2">
                  <div>មាស សារ៉ាវី</div>
                  <div>saravy@gmail.com</div>
                </div>
              </div>
            </div>
            <div class="card flex-fill">
              <h5 class="card-header fw-bold">ព័ត៌មានលំអិតអំពីខ្ញុំ</h5>
              <div class="card-body">
                <form>
                  <div class="row my-2">
                    <div class="col-sm-2 col-form-label">នាមត្រកូល</div>
                    <div class="col-sm-4">
                      <input type="email" class="form-control" />
                    </div>

                    <div class="col-sm-2 col-form-label">នាមខ្លួន</div>
                    <div class="col-sm-4">
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="row my-2">
                    <div class="col-sm-2 col-form-label">ភេទ</div>
                    <div class="col-sm-4">
                      <select
                        class="form-select form-select-lg"
                        id="inputGroupSelect01"
                      >
                        <option selected>ជ្រើសរើសភេទ</option>
                        <option value="1">ប្រុស</option>
                        <option value="2">ស្រី</option>
                      </select>
                    </div>

                    <div class="col-sm-2 col-form-label">ថ្ងៃខែឆ្នាំកំណើត</div>
                    <div class="col-sm-4">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="dd-mm-yyyy"
                        name="oldDob"
                      />
                    </div>
                  </div>
                  <div class="row my-2">
                    <div class="col-sm-2 col-form-label">លេខទូរស័ព្ទ</div>
                    <div class="col-sm-4">
                      <input type="email" class="form-control" />
                    </div>

                    <div class="col-sm-2 col-form-label">អាសយដ្ឋាន</div>
                    <div class="col-sm-4">
                      <input type="email" class="form-control" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="float-end">
                        <button
                          type="button"
                          class="btn btn-primary rounded-pill"
                        >
                          កែប្រែ
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
h5 {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
}
</style>