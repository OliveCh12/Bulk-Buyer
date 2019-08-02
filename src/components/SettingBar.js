import React from "react";

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div class="row">
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Total Unit"
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Total Price"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6" />
        </div>
      </div>
    </div>
  );
};

export default SettingBar;
