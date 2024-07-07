<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body p-sm-5 my-sm-5">
          <!-- d-sm-flex flex-sm-row 
          text-md-start
          align-items-center
          justify-content-center
          -->
          <div class="d-sm-flex flex-sm-row justify-content-center text-center">
            <div class="py-sm-4">
              <div class="avatar avatar-xxl">
                <img
                  src="@/assets/img/talha.jpg"
                  alt="..."
                  class="avatar-img rounded-circle"
                />
              </div>
            </div>
            <div class="p-sm-4">
              <div>មាស សារ៉ាវី</div>
              <div>saravy@gmail.com</div>
              <div class="p-2">
                <router-link
                  to="/user-dashboard/profile-setting"
                  class="btn btn-primary rounded-pill"
                  >ការកំណត់</router-link
                >
              </div>
            </div>
            <div class="vr d-none d-md-block"></div>
            <div class="text-start p-sm-4">
              <div class="fw-bold">
                សមាជិកភាពៈ ចូលរួមតាំងពី 30-06-2024, 3:00 PM
              </div>
              <div>បានស្នើសុំសេវាចំនួន ៥ដង</div>
              <div class="ps-3">-បញ្ជាក់ភាពត្រឹមត្រូវចំនួន ២ដង</div>
              <div class="ps-3">-កែតម្រូវចំនួន ២ដង</div>
              <div class="ps-3">-ទុតិយតាចំនួន ១ដង</div>
            </div>
          </div>
          <!-- <div class="d-flex justify-content-center"> -->

          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .rounded {
  border-radius: 50%;
} */
</style>