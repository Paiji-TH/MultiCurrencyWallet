import React, { Fragment } from 'react'

import CSSModules from 'react-css-modules'
import styles from './Wallet.scss'
import Button from 'components/controls/Button/Button'
import Row from './Row/Row'
import Slider from './components/WallerSlider'
import Table from 'components/tables/Table/Table'
import config from 'app-config'
import { FormattedMessage } from 'react-intl'
import exConfig from 'helpers/externalConfig'


const CurrenciesList = ({
  tableRows,
  currencies,
  infoAboutCurrency,
  hiddenCoinsList,
  goToСreateWallet,
  getExCurrencyRate,
}) => {
  let settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 4
  }
   
  return (
    <div styleName="yourAssets">
      {(exConfig && exConfig.opts && exConfig.opts.showWalletBanners)  ? (
        <Fragment>
          {!isWidgetBuild && (
            <Slider
              {...this.state}
            />
          )}
        </Fragment>
      ) : (
        ''
      )}

      <h3 styleName="yourAssetsHeading">
        <FormattedMessage id="YourAssets" defaultMessage="Ваши валюты" />
      </h3>
      <p styleName="yourAssetsDescr">
        <FormattedMessage
          id="YourAssetsDescription"
          defaultMessage="Здесь вы можете безопасно хранить и быстро обменивать Bitcoin, Ethereum, {br} USD, Tether, BCH и многочисленные токены ERC-20."
          values={{ br: <br /> }}
        />
      </p>
      <Table
        className={`${styles.walletTable} data-tut-address`}
        rows={tableRows}
        rowRender={(row, index, selectId, handleSelectId) => (
          <Row
            key={index}
            index={index}
            getCurrencyUsd={usd => this.getCurrencyUsd(usd)}
            currency={row}
            itemData={row}
            currencies={currencies}
            infoAboutCurrency={infoAboutCurrency}
            getExCurrencyRate={(currencySymbol, rate) => getExCurrencyRate(currencySymbol, rate)}
            hiddenCoinsList={hiddenCoinsList}
            selectId={selectId}
            handleSelectId={handleSelectId}
          />
        )}
      />
      <Button onClick={goToСreateWallet} blue transparent fullWidth>
        <FormattedMessage id="addAsset" defaultMessage="Добавить валюту" />
      </Button>
    </div>
  )
}

export default CSSModules(CurrenciesList, styles, { allowMultiple: true })