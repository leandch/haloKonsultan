import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICHkBisnis, ICHKKtn, ICHkPerdata, ICHkPidana} from '../../../assets';
import {colors, fonts} from '../../../utils';

const KategoriHukum = ({kategori, onPress}) => {
  const Icon = () => {
    if (kategori === 'Pidana') {
      return <ICHkPidana style={styles.icon} />;
    }
    if (kategori === 'Perdata') {
      return <ICHkPerdata style={styles.icon} />;
    }
    if (kategori === 'Tenagakerja') {
      return <ICHKKtn style={styles.icon} />;
    }
    if (kategori === 'Bisnis') {
      return <ICHkBisnis style={styles.icon} />;
    }
    return <ICHkPidana style={styles.icon} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Hukum</Text>
      <Text style={styles.bidang}>{kategori}</Text>
    </TouchableOpacity>
  );
};

export default KategoriHukum;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 120,
    height: 140,
  },
  icon: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.white,
  },
  bidang: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
});
